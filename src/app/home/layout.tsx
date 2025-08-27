'use client';
import CriarOrdemServicoModal from '@/components/criarItemModal';
import EditarOrdemServicoModal from '@/components/editarItemModal';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from "react";

type OrdemServicoData = {
  id: number;
  cliente: string;
  numeroOS: string;
  ss: string;
  dataCriacaoSS: string;
  osCliente: string;
  descricaoOS: string;
  inicioServico: string;
  terminoServico: string;
  duracao: string;
  numeroCAFT: string;
  vencimentoCAFT: string;
  numeroPOM: string;
  tipoServico: string;
  local: string;
  cidade: string;
  supervisor: string;
  numeroRefRelatorio: string;
  relatorioIniciado: string;
  dataEmissaoRelatorio: string;
  dataEnvioRelatorio: string;
  emissaoXEnvio: string;
  revisao: string;
  dataRevisao: string;
  dataRelatorioAssinado: string;
  elaboradoPor: string;
  status: string;
  statusAtraso: string;
  contagemAtraso: string;
  contagemNoPrazo: string;
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  



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
