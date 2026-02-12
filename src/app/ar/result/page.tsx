"use client";

import { useEffect, useState } from "react";
import CongratsCard from "@/features/ar/CongratsCard";
import styles from "./style.module.css";

export default function ResultPage() {
    const [image, setImage] = useState<string | null>(null);
    const [id, setId] = useState<string | null>(null);

    useEffect(() => {
        const savedImage = localStorage.getItem("lastShot");
        const detectedMarker = localStorage.getItem("detectedMarker");

        setImage(savedImage);
        setId(detectedMarker);
    }, []);

    if (!image || !id) return null;

    return (
        <div className={styles.wrapper}>
            <CongratsCard image={image} id={id} />
        </div>
    );
}
