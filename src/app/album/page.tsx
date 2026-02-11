"use client";

import { useEffect, useState } from "react";
import styles from "./style.module.css";
import Link from "next/link";

type Record = {
    image: string;
    savedAt: number;
};

export default function AlbumPage() {
    const [image, setImage] = useState<string | null>(null);

    useEffect(() => {
        const saved = localStorage.getItem("lastShot");
        setImage(saved);
    }, []);

    return (
        <div>
            <header>
                <li>
                    <h2>人物</h2>
                </li>
                <li>
                    <h2>和歌</h2>
                </li>
            </header>
            <main>
                <div className={styles.content}>
                    <div className={styles.container}>
                        <div className={styles.wrapper}>
                            <div className={styles.box}>
                            </div>
                            <div className={styles.box}>
                            </div>
                            <div className={styles.box}>
                            </div>
                        </div>
                        <div className={styles.wrapper}>
                            <Link href="ar/explain" >
                                <div className={styles.box}>
                                    {image && (
                                        <img
                                            src={image}
                                            alt="保存した画像"
                                            className={styles.previewImage}
                                        />
                                    )}
                                </div>
                            </Link>
                            <div className={styles.box}>
                            </div>
                            <div className={styles.box}>
                            </div>
                        </div>
                        <div className={styles.textWrap}>
                            <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                            <h3>織田信長</h3>
                        </div>
                    </div>
                </div>

            </main>
            <footer>
                <Link href="/" className={styles.backBtn}>戻る</Link>
            </footer>
        </div>
    );
}
