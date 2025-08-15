'use client';

import CriarItemModal from "@/components/criarItemModal";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  

  return (
      <body className="bg-light text-dark">
        <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">Ordens de Serviço</a>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Procurar</button>
          </form>
          <button onClick={() => setIsModalOpen(true)}>Abrir Modal</button>
        </div>
        </nav>
        <CriarItemModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        {children}
      </body>
  );
}
