"use client";

import { useEffect, useRef } from "react";
import styles from "./marker.module.css";
import Link from "next/link";


type Props = {
    onDetect: () => void;
};

export default function MarkerScanner({ onDetect }: Props) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationId = useRef<number | null>(null);
    const detectedRef = useRef(false);
    const frameCount = useRef(0);

    // カメラ起動
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        navigator.mediaDevices
            .getUserMedia({
                video: { facingMode: "environment" },
                audio: false,
            })
            .then((stream) => {
                video.srcObject = stream;
                video.play();
            });

        return () => {
            const stream = video.srcObject as MediaStream | null;
            stream?.getTracks().forEach((track) => track.stop());
        };
    }, []);

    // 描画 & マーカー検出
    useEffect(() => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        if (!video || !canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const onLoaded = () => {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;

            const draw = () => {
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

                // ===== 仮マーカー検出 =====
                if (!detectedRef.current) {
                    frameCount.current += 1;

                    // 約2秒後に検出成功したことにする
                    if (frameCount.current > 360) {
                        detectedRef.current = true;
                        onDetect();
                        return;
                    }
                }
                // ==========================

                animationId.current = requestAnimationFrame(draw);
            };

            draw();
        };

        video.addEventListener("loadedmetadata", onLoaded);

        return () => {
            video.removeEventListener("loadedmetadata", onLoaded);
            if (animationId.current) {
                cancelAnimationFrame(animationId.current);
            }
        };
    }, [onDetect]);

    return (
        <div className={styles.wrapper}>
            <video ref={videoRef} playsInline muted hidden />
            <canvas ref={canvasRef} className={styles.canvas} />
            <Link href="/" className={styles.backBtn}>戻る</Link>
            <div className={styles.frame}>
                <span className={styles.tl}></span>
                <span className={styles.tr}></span>
                <span className={styles.bl}></span>
                <span className={styles.br}></span>
            </div>
            <div className={styles.guide}>
                <p>カメラを動かして<br />
                    マーカーにかざしてみよう</p>
            </div>
        </div>
    );
}
