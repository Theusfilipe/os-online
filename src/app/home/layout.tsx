'use client';
import CriarOrdemServicoModal from '@/components/criarItemModal';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (

    
    <div className="bg-light text-dark min-vh-100">
      
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">Ordens de Serviço</a>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Procurar</button>
          </form>
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#criarOrdemModal">
            Criar
          </button>
        </div>
      </nav>

      <CriarOrdemServicoModal />    

      <main>{children}</main>
    </div>
  );
}
