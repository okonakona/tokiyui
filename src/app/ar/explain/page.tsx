"use client";

import { useEffect, useState } from "react";
import ExplainOverlay from "@/features/ar/ExplainOverlay";
import styles from "./style.module.css";

export default function ExplainPage() {
    const [image, setImage] = useState<string | null>(null);

    useEffect(() => {
        const saved = localStorage.getItem("lastShot");
        setImage(saved);
    }, []);

    return (
        <div className={styles.wrapper}>

            <div className={styles.cameraBase}>
                {image && (
                    <img
                        src={image}
                        alt="保存した画像"
                        className={styles.previewImage}
                    />
                )}
            </div>
            <ExplainOverlay />
        </div>
    );
}
