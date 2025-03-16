import type { Metadata } from "next";
import "./globals.css";
import Footer from "@shared/components/footer";

export const metadata: Metadata = {
  title: "PIP - Partido Internacional Paulista",
  description: "Partido político de la provincia de Paulista, Chiriqui, Panamá",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
