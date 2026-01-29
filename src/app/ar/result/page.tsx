"use client";

import CongratsCard from "@/features/ar/CongratsCard";
import styles from "./style.module.css";

export default function ResultPage() {
    // 仮：localStorage から取得
    const image =
        typeof window !== "undefined"
            ? localStorage.getItem("lastShot")
            : null;

    if (!image) return null;

    return (
        <div className={styles.wrapper}>
            <CongratsCard image={image} />
        </div>
    );
}
