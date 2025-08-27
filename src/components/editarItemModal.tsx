'use client';

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export type OrdemServicoData = {
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

interface Props {
  ordem: OrdemServicoData | null;
}

export default function EditarOrdemServicoModal({ ordem }: Props) {
  const [formData, setFormData] = useState<Partial<OrdemServicoData>>({});

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log('Dados enviados:', formData);
    // Aqui você faria o POST para sua API
  }

  return (
    <div className="modal fade" id="editarOrdemModal" tabIndex={-1} aria-hidden="true">
      <div className="modal-dialog modal-xl modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Editar Ordem de Serviço</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
            
              <div className="row g-3">
                <div className="col-md-2">
                  <label className="form-label">ID</label>
                  <input type="number" name="id" className="form-control" onChange={handleChange} />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Cliente</label>
                  <input type="text" name="cliente" className="form-control" onChange={handleChange} />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Número OS</label>
                  <input type="text" name="numeroOS" className="form-control" onChange={handleChange} />
                </div>
                <div className="col-md-4">
                  <label className="form-label">SS</label>
                  <input type="text" name="ss" className="form-control" onChange={handleChange} />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Data Criação SS</label>
                  <input type="date" name="dataCriacaoSS" className="form-control" onChange={handleChange} />
                </div>
                <div className="col-md-4">
                  <label className="form-label">OS Cliente</label>
                  <input type="text" name="osCliente" className="form-control" onChange={handleChange} />
                </div>
                <div className="col-md-12">
                  <label className="form-label">Descrição OS</label>
                  <textarea name="descricaoOS" className="form-control" onChange={handleChange}></textarea>
                </div>
                <div className="col-md-4">
                  <label className="form-label">Início Serviço</label>
                  <input type="date" name="inicioServico" className="form-control" onChange={handleChange} />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Término Serviço</label>
                  <input type="date" name="terminoServico" className="form-control" onChange={handleChange} />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Duração</label>
                  <input type="text" name="duracao" className="form-control" onChange={handleChange} />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Número CAFT</label>
                  <input type="text" name="numeroCAFT" className="form-control" onChange={handleChange} />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Vencimento CAFT</label>
                  <input type="date" name="vencimentoCAFT" className="form-control" onChange={handleChange} />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Número POM</label>
                  <input type="text" name="numeroPOM" className="form-control" onChange={handleChange} />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Tipo Serviço</label>
                  <input type="text" name="tipoServico" className="form-control" onChange={handleChange} />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Local</label>
                  <input type="text" name="local" className="form-control" onChange={handleChange} />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Cidade</label>
                  <input type="text" name="cidade" className="form-control" onChange={handleChange} />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Supervisor</label>
                  <input type="text" name="supervisor" className="form-control" onChange={handleChange} />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Número Ref. Relatório</label>
                  <input type="text" name="numeroRefRelatorio" className="form-control" onChange={handleChange} />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Relatório Iniciado</label>
                  <input type="text" name="relatorioIniciado" className="form-control" onChange={handleChange} />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Data Emissão Relatório</label>
                  <input type="date" name="dataEmissaoRelatorio" className="form-control" onChange={handleChange} />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Data Envio Relatório</label>
                  <input type="date" name="dataEnvioRelatorio" className="form-control" onChange={handleChange} />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Emissão X Envio</label>
                  <input type="text" name="emissaoXEnvio" className="form-control" onChange={handleChange} />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Revisão</label>
                  <input type="text" name="revisao" className="form-control" onChange={handleChange} />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Data Revisão</label>
                  <input type="date" name="dataRevisao" className="form-control" onChange={handleChange} />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Data Relatório Assinado</label>
                  <input type="date" name="dataRelatorioAssinado" className="form-control" onChange={handleChange} />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Elaborado Por</label>
                  <input type="text" name="elaboradoPor" className="form-control" onChange={handleChange} />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Status</label>
                  <input type="text" name="status" className="form-control" onChange={handleChange} />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Status Atraso</label>
                  <input type="text" name="statusAtraso" className="form-control" onChange={handleChange} />
                </div>
                <div className="col-md-3">
                  <label className="form-label">Contagem Atraso</label>
                  <input type="text" name="contagemAtraso" className="form-control" onChange={handleChange} />
                </div>
                    <div className="col-md-3">
                        <label className="form-label">Contagem No Prazo</label>
                        <input type="text" name="contagemNoPrazo" className="form-control" onChange={handleChange} />
                    </div>
                </div>
            

                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                        Cancelar
                    </button>
                    <button type="submit" className="btn btn-primary">
                        Salvar
                    </button>
                </div>
                </form>
            </div>
        </div>
    </div>
    </div>
    
    
  );
}
