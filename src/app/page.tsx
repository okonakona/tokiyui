import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.css";

export default function Home() {
  return (
    <div className={styles.content}>
      <header>
        <h1><Image src="/assets/logo.svg" alt="時結-tokiyui-AR" width={342} height={245} /></h1>
      </header>
      <main>
        <Link href="/ar" className={styles.arBtn}>　ARを始める</Link>
        <Link href="/how-to" className={styles.howtoBtn}>遊び方</Link>
      </main>
      <footer>
        <Link href="/album" className={styles.footerBtn}>
          <div className={styles.box}>
            <Image src="/assets/record.svg" alt="写真のアイコン" width={35} height={35} />
          </div>
          図鑑
        </Link>
        <Link href="/search" className={styles.footerBtn}>
          <div className={styles.box}>
            <Image src="/assets/search.svg" alt="虫眼鏡のアイコン" width={35} height={35} />
          </div>
          発見
        </Link>
      </footer>
    </div>
  );
}
