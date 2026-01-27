import type { Metadata } from "next";
import { Zen_Maru_Gothic } from "next/font/google";
import "./globals.css";

const zenMaru = Zen_Maru_Gothic({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-zen-maru",
});

export const metadata: Metadata = {
  title: "時結 -TOKIYUI-",
  description: "スマホ越しに、推しが生きた時代が蘇る京都へ。物語と現実が交差する場所を巡り、まるでタイムスリップするような“推し旅”体験を始めましょう。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={zenMaru.className}>
        {children}
      </body>
    </html>
  );
}
