import { SearchContextProvider } from "../components/SearchContext";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "學生管理資訊系統",
  description: "學生管理資訊系統",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant-TW">
      <body className={inter.className}>
        <SearchContextProvider>{children}</SearchContextProvider>
      </body>
    </html>
  );
}
