
import type { Metadata } from "next";

import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'; // your own styles if any

export const metadata: Metadata = {
  title: "Ordens Online",
  description: "Site para salvar e compartilhar ordens de serviço online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className="bg-light text-dark">
        {children}
      </body>
    </html>
  );
}
