"use client";

export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ExplainOverlay from "@/features/ar/ExplainOverlay";
import styles from "./style.module.css";

type AlbumItem = {
    id: string;
    image: string;
};

type AlbumData = {
    people: AlbumItem[];
    poem: AlbumItem[];
};

export default function ExplainPage() {
    const [image, setImage] = useState<string | null>(null);
    const searchParams = useSearchParams();
    const id = searchParams.get("id"); // ?id=poem_02 など

    useEffect(() => {
        const saved = localStorage.getItem("album");
        if (!saved || !id) return;

        const album: AlbumData = JSON.parse(saved);

        // ▼ people と poem を結合して検索
        const allItems = [...album.people, ...album.poem];

        const target = allItems.find((item) => item.id === id);

        if (target) {
            setImage(target.image);
        }
    }, [id]);

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
            <ExplainOverlay id={id} />
        </div>
    );
}
