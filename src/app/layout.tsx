import "../styles/globals.scss";
import { Inter } from "next/font/google";
import HeaderWrapper from "../components/HeaderWrapper";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata = {
  title: "Test App",
  description: "Bitrix24 test task",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderWrapper />
        <main>{children}</main>
      </body>
    </html>
  );
}
