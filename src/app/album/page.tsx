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
        { title: "新撰組", text: "江戸時代末期（幕末）に江戸幕府の徴募により組織された浪士隊である。特に尊攘派構成員の摘発活動に従事した。" },
    ],
    poem: [
        { title: "良暹法師（七十番）", text: "淋しさに　宿を立ち出でて　ながむれば　いづこも同じ　秋のゆふぐれ" },
        { title: "曽禰好忠（四十六番）", text: "由良の門を　わたる舟人　かぢをたえ　ゆくへも知らぬ　恋の道かな" },
    ],
};

export default function AlbumPage() {
    const [image, setImage] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<"people" | "poem">("people");
    const [album, setAlbum] = useState<{
        people: any[];
        poem: any[];
    }>({
        people: [],
        poem: [],
    });


    useEffect(() => {
        const stored = localStorage.getItem("album");
        if (stored) {
            setAlbum(JSON.parse(stored));
        }
    }, []);

    const getImageById = (id: string) => {
        return album[activeTab].find((item: any) => item.id === id)?.image;
    };


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
                            onClick={() => setActiveTab("poem")}
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
                    {albumData[activeTab].map((item, index) => {
                        const id = `${activeTab}_${String(index + 1).padStart(2, "0")}`;
                        const img = getImageById(id);

                        return (
                            <div className={styles.container} key={id}>
                                <div className={styles.wrapper}>
                                    <div className={styles.box}></div>

                                    <Link href={`/ar/explain?id=${id}`}>
                                        <div className={styles.box}>
                                            {img && (
                                                <img
                                                    src={img}
                                                    alt="保存した画像"
                                                    className={styles.previewImage}
                                                />
                                            )}
                                        </div>
                                    </Link>

                                    <div className={styles.box}></div>
                                    <div className={styles.box}></div>
                                    <div className={styles.box}></div>
                                    <div className={styles.box}></div>
                                </div>

                                <div className={styles.textWrap}>
                                    <p>{item.text}</p>
                                    <h3>{item.title}</h3>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </main >
            <footer>
                <Link href="/" className={styles.backBtn}>戻る</Link>
            </footer>
        </div >
    );
}
