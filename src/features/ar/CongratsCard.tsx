"use client";

import styles from "./congrats.module.css";
import Link from "next/link";

type Props = {
    image: string;
    id: string;
};

export default function CongratsCard({ image, id }: Props) {
    return (
        <div className={styles.card}>
            <h1 className={styles.title}>記録完了！</h1>

            <div className={styles.preview}>
                <img src={image} alt="記録したAR写真" />
            </div>

            <p className={styles.message}>
                京都の欠片を<br />
                ひとつ集めました
            </p>

            <div className={styles.actions}>
                <Link href={`/ar/explain?id=${id}`} className={styles.primary}>
                    解説を見る
                </Link>
                <Link href="/album" className={styles.secondary}>
                    図鑑を見る
                </Link>
            </div>
        </div>
    );
}
