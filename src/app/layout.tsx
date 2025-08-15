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
        <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">Ordens de Serviço</a>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Procurar</button>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Criar Ordem
            </button>
          </form>
        </div>
        </nav>
      
        {children}
      </body>
    </html>
  );
}
