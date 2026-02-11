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
            <header className={styles.header}>
                <h1>図鑑</h1>
                <section>
                    <ul className={styles.nav}>
                        <li className={styles.people}>
                            <h2>人物</h2>
                        </li>
                        <li className={styles.poem}>
                            <h2>和歌</h2>
                        </li>
                    </ul>
                </section>
            </header>
            <main>
                <div className={styles.content}>
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
                            <p>日本の戦国時代から安土桃山時代にかけての武将・大名。戦国の三英傑の一人。 尾張国出身。</p>
                            <h3>織田信長</h3>
                        </div>
                    </div>
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
                            <p>日本の戦国時代から安土桃山時代にかけての武将・大名。戦国の三英傑の一人。 尾張国出身。</p>
                            <h3>織田信長</h3>
                        </div>
                    </div>
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
                            <p>日本の戦国時代から安土桃山時代にかけての武将・大名。戦国の三英傑の一人。 尾張国出身。</p>
                            <h3>織田信長</h3>
                        </div>
                    </div>
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
                            <p>日本の戦国時代から安土桃山時代にかけての武将・大名。戦国の三英傑の一人。 尾張国出身。</p>
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
