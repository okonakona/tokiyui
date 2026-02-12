"use client";

import { useEffect, useRef } from "react";
import styles from "./arCamera.module.css";
import Link from "next/link";

type Props = {
    markerId: string | null;
    onShot: (image: string) => void;
};

export default function ARCamera({ markerId, onShot }: Props) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const frameImageRef = useRef<HTMLImageElement | null>(null);
    const animationId = useRef<number | null>(null);

    // フレーム画像ロード
    useEffect(() => {
        if (!markerId) return;

        const img = new Image();
        img.src = `/ar/${markerId}.png`; // ← 自動切替
        frameImageRef.current = img;
    }, [markerId]);

    // カメラ起動
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        navigator.mediaDevices
            .getUserMedia({
                video: {
                    facingMode: "user",
                    width: { ideal: 1280 },
                    height: { ideal: 720 },
                },
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

    // 描画ループ（3:4固定）
    useEffect(() => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        if (!video || !canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const onLoaded = () => {
            // 🎯 撮影解像度を3:4で固定
            canvas.width = 900;
            canvas.height = 1200;

            const draw = () => {
                const vw = video.videoWidth;
                const vh = video.videoHeight;

                // videoから中央を3:4で切り出す
                const targetRatio = 3 / 4;
                const videoRatio = vw / vh;

                let sx = 0,
                    sy = 0,
                    sw = vw,
                    sh = vh;

                if (videoRatio > targetRatio) {
                    // 横長 → 横を切る
                    sw = vh * targetRatio;
                    sx = (vw - sw) / 2;
                } else {
                    // 縦長 → 縦を切る
                    sh = vw / targetRatio;
                    sy = (vh - sh) / 2;
                }

                ctx.drawImage(
                    video,
                    sx,
                    sy,
                    sw,
                    sh,
                    0,
                    0,
                    canvas.width,
                    canvas.height
                );

                // フレームAR
                const frame = frameImageRef.current;
                if (frame && frame.complete) {
                    ctx.drawImage(frame, 0, 0, canvas.width, canvas.height);
                }

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
    }, []);
    const handleShot = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const image = canvas.toDataURL("image/png");
        onShot(image);
    };

    return (
        <div className={styles.camera}>
            <div className={styles.frame}>
                <video ref={videoRef} playsInline muted hidden />
                <canvas ref={canvasRef} />
            </div>
            <Link href="/" className={styles.backBtn}>戻る</Link>

            {/* シャッターボタン */}
            <button className={styles.shutter} onClick={handleShot} />
        </div>
    );
}
