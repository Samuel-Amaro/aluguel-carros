import Header from "@/components/Header";
import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aluguel de Carros",
  description: "Website Aluguel de carros",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header title="Aluguel De Carros" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
