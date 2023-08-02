import "../styles/normalize.css";
import "../styles/globals.css";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

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
