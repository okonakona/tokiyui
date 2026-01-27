import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <header>
        <h1><Image src="/assets/logo.svg" alt="時結-tokiyui-AR"  width={342} height={173}/></h1>
      </header>
      <main>
        <Link href="/ar">ARを始める</Link>
        <Link href="/how-to">遊び方</Link>
      </main>
      <footer>
        <Link href="">記録</Link>
        <Link href="">見つける</Link>
      </footer>
    </>
  );
}
