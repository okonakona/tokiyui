"use client";

import { useEffect, useState } from "react";
import styles from "./style.module.css";
import Link from "next/link";

type Record = {
    image: string;
    savedAt: number;
};

const albumData = {
    people: [
        { title: "織田信長", text: "日本の戦国時代から安土桃山時代にかけての武将・大名。戦国の三英傑の一人。 尾張国出身。" },
        { title: "豊臣秀吉", text: "三英傑の一人。織田信長の後を継いで天下統一を果たし、近世封建社会の基礎を築いた。" },
    ],
    poem: [
        { title: "百人一首", text: "百人の和歌を一人につき一首ずつ選んで作られた百首から成る秀歌撰（詞華集）。" },
    ],
};

export default function AlbumPage() {
    const [image, setImage] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<"people" | "poem">("people");


    useEffect(() => {
        const saved = localStorage.getItem("lastShot");
        setImage(saved);
    }, []);

    return (
        <div>
            <header className={styles.header}>
                <h1>図鑑</h1>
                <section>
                    <ul className={styles.nav}>
                        <li
                            className={styles.people}
                            onClick={() => setActiveTab("people")}
                        >
                            <h2>人物</h2>
                        </li>
                        <li
                            className={styles.poem}
                        // onClick={() => setActiveTab("poem")}
                        >
                            <h2>和歌</h2>
                        </li>
                    </ul>
                </section>
            </header>
            <main>
                <div className={`${styles.content} ${activeTab === "people"
                    ? styles.contentPeople
                    : styles.contentPoem
                    }`}>
                    {albumData[activeTab].map((item, index) => (
                        <>
                            <div className={styles.container}>
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
                                    <div className={styles.box}>
                                    </div>
                                    <div className={styles.box}>
                                    </div>
                                    <div className={styles.box}>
                                    </div>
                                </div>
                                <div className={styles.textWrap}>
                                    <p>{item.text}</p>
                                    <h3>{item.title}</h3>
                                </div>
                            </div>
                        </>
                    ))}
                </div>

            </main >
            <footer>
                <Link href="/" className={styles.backBtn}>戻る</Link>
            </footer>
        </div >
    );
}
