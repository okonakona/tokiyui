"use client";
import Link from "next/link";
import styles from "./explainOverlay.module.css";

type ExplainOverlayProps = {
    id: string | null;
};

const explainData: Record<
    string,
    { title: string; subtitle: string; text1: string[]; text2: string[] }
> = {
    people_01: {
        title: "本能寺跡地",
        subtitle: "織田信長 最期の地",
        text1: [
            "天正10年（1582年）、織田信長は",
            "家臣・明智光秀の謀反により",
            "この本能寺で最期を迎えました。",
        ],
        text2: [
            "当時の本能寺は、",
            "今より少し西のこの場所にありました",
            "炎に包まれ、信長の遺体は",
            "見つかっていません。",
        ],
    },
    people_02: {
        title: "池田屋跡地",
        subtitle: "新選組　池田屋事件",
        text1: [
            "元治元年（1864年）、",
            "尊王攘夷派の志士たちが",
            "池田屋に集結していました。",
        ],
        text2: [
            "そこへ新選組が踏み込み、",
            "激しい戦闘が繰り広げられます。",
            "この事件により新選組の名は",
            "京都中に知れ渡りました。",
        ],
    },
    poem_01: {
        title: "良暹法師（七十番）",
        subtitle: "大原の僧庵　正法庵（しょうぼうあん）",
        text1: [
            "淋しさに　宿を立ち出でて　ながむれば",
            "　いづこも同じ　秋のゆふぐれ",
        ],
        text2: [
            "寂しくて家を出てあたりを眺めてはみたが、",
            "この秋の夕暮れの寂しさはどこも同じであるものだ。",
        ],
    },
    poem_02: {
        title: "曽禰好忠（四十六番）",
        subtitle: "由良の門　由良の瀬戸（潮流の速い海峡・河口）",
        text1: [
            "由良の門を　わたる舟人　かぢをたえ",
            "　ゆくへも知らぬ　恋の道かな",
        ],
        text2: [
            "由良の海峡を渡る船人が、かいをなくして、",
            "行く先も決まらぬままに波間に漂っているように、",
            "わたしたちの恋の行方も、どこへ漂っていくのか思い迷っているものだ。",
        ],
    },
};

export default function ExplainOverlay({ id }: ExplainOverlayProps) {
    if (!id) return null;

    const data = explainData[id];
    if (!data) return null;

    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{data.title}</h2>
            <p className={styles.subtitle}>{data.subtitle}</p>
            <hr />

            <p className={styles.text}>
                {data.text1.map((line, i) => (
                    <span key={i}>
                        {line}
                        <br />
                    </span>
                ))}
            </p>

            <p className={styles.text}>
                {data.text2.map((line, i) => (
                    <span key={i}>
                        {line}
                        <br />
                    </span>
                ))}
            </p>

            <Link href="/album" className={styles.backBtn}>
                図鑑を見る
            </Link>
        </div>
    );
}
