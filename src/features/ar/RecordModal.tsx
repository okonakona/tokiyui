"use client";

import styles from "./recordModal.module.css";

type Props = {
    open: boolean;
    image: string | null;
    onConfirm: () => void;
    onRetry: () => void;
};

export default function RecordModal({
    open,
    image,
    onConfirm,
    onRetry,
}: Props) {
    if (!open || !image) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h2 className={styles.title}>この一枚を記録しますか？</h2>

                <div className={styles.preview}>
                    <img src={image} alt="撮影したAR画像" />
                </div>

                <div className={styles.buttons}>
                    <button className={styles.retry} onClick={onRetry}>
                        撮り直す
                    </button>
                    <button className={styles.confirm} onClick={onConfirm}>
                        記録する
                    </button>
                </div>
            </div>
        </div>
    );
}
