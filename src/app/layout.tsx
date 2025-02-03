import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./lib/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Verv",
  description: "Verv Home Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
