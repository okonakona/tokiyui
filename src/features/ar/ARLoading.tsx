"use client";

import styles from "./loading.module.css";

export default function ARLoading() {
    return (
        <div className={styles.overlay}>
            <div className={styles.content}>
                <div className={styles.loader} />
                <p className={styles.text}>過去と現在を重ねています…</p>
            </div>
        </div>
    );
}
