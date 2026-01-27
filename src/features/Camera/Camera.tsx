"use client";

import { useEffect, useRef } from "react";
import styles from "./style.module.css";

export default function Camera() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationId = useRef<number | null>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        navigator.mediaDevices.getUserMedia({
            video: { facingMode: "user" },
            audio: false,
        }).then((stream) => {
            video.srcObject = stream;
            video.play();
        });

        return () => {
            const stream = video.srcObject as MediaStream | null;
            stream?.getTracks().forEach((track) => track.stop());
        };
    }, []);

    useEffect(() => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        if (!video || !canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const onLoaded = () => {
        // 🔑 内部解像度は元のまま
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;

            const draw = () => {
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
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

    return (
    <div className={styles.camera}>
        <div className={styles.frame}>
            <video ref={videoRef} playsInline hidden />
            <canvas ref={canvasRef} />
        </div>
    </div>
    );
}
