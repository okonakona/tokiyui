"use client";

import Link from "next/link";
import styles from "./explainOverlay.module.css";

export default function ExplainOverlay() {
    return (
        <>
            {/* <div className={styles.quote}>
                「是非もなし。」
            </div> */}

            {/* 下部解説カード */}
            <div className={styles.card}>
                <h2 className={styles.title}>本能寺跡地</h2>
                <p className={styles.subtitle}>
                    織田信長 最期の地
                </p>

                <p className={styles.text}>
                    天正10年（1582年）、織田信長は
                    家臣・明智光秀の謀反により
                    この本能寺で最期を迎えました。
                </p>

                <p className={styles.text}>
                    当時の本能寺は、<br />
                    今より少し西のこの場所にありました。<br />
                    炎に包まれ、信長の遺体は
                    見つかっていません。
                </p>

                {/* 百人一首 */}
                <div className={styles.poem}>
                    <p className={styles.kami}>
                        有馬山 猪名の笹原 風吹けば
                    </p>
                    <p className={styles.shimo}>
                        いでそよ人を 忘れやはする
                    </p>
                    <Link href="/album" className={styles.backBtn}>図鑑を見る</Link>
                </div>
            </div>
        </>
    );
}
