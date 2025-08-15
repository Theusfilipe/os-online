'use client';

import React from "react";

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

interface Props {
  data: OrdemServicoData[];
}

export default function ServiceTable({ data }: Props) {
  return (
    
    <div className="table-responsive" >
            <table className="table table-bordered table-hover" style={{ whiteSpace: "nowrap" }}>
                <thead className="table-dark" >
                    <tr>
                    <th style={{left: 0, background: "#343a40", zIndex: 2 }}>ID</th>
                    <th>CLIENTE</th>
                    <th>Nº OS</th>
                    <th>SS</th>
                    <th >DATA DE CRIAÇÃO DA SS</th>
                    <th>OS CLIENTE</th>
                    <th>DESCRIÇÃO DA OS</th>
                    <th>INÍCIO DO SERVIÇO</th>
                    <th>TÉRMINO DO SERVIÇO</th>
                    <th>DURAÇÃO</th>
                    <th>Nº DA CAFT</th>
                    <th>VENCIMENTO CAFT</th>
                    <th>Nº DO POM</th>
                    <th>TIPO DE SERVIÇO</th>
                    <th>LOCAL</th>
                    <th>CIDADE</th>
                    <th>SUPERVISOR</th>
                    <th>Nº DE REF. DO RELATÓRIO</th>
                    <th>RELATÓRIO INICIADO</th>
                    <th>DATA DE EMISSÃO DO RELATÓRIO</th>
                    <th>DATA DO ENVIO DO RELATÓRIO</th>
                    <th>EMISSÃO X ENVIO</th>
                    <th>REVISÃO</th>
                    <th>DATA DE REVISÃO</th>
                    <th>DATA RELATÓRIO ASSINADO PELO CLIENTE</th>
                    <th>ELABORADO POR</th>
                    <th>STATUS</th>
                    <th>STATUS ATRASO</th>
                    <th>CONTAGEM DE ATRASO</th>
                    <th>CONTAGEM NO PRAZO</th>
                    </tr>
                </thead>
                <tbody>
                {data.map((row) => (
                    <tr key={row.id}>
                        <td style={{ position: "sticky", left: 0, background: "#fff", zIndex: 1 }}>{row.id}</td>
                        <td>{row.cliente}</td>
                        <td>{row.numeroOS}</td>
                        <td>{row.ss}</td>
                        <td>{row.dataCriacaoSS}</td>
                        <td>{row.osCliente}</td>
                        <td>{row.descricaoOS}</td>
                        <td>{row.inicioServico}</td>
                        <td>{row.terminoServico}</td>
                        <td>{row.duracao}</td>
                        <td>{row.numeroCAFT}</td>
                        <td>{row.vencimentoCAFT}</td>
                        <td>{row.numeroPOM}</td>
                        <td>{row.tipoServico}</td>
                        <td>{row.local}</td>
                        <td>{row.cidade}</td>
                        <td>{row.supervisor}</td>
                        <td>{row.numeroRefRelatorio}</td>
                        <td>{row.relatorioIniciado}</td>
                        <td>{row.dataEmissaoRelatorio}</td>
                        <td>{row.dataEnvioRelatorio}</td>
                        <td>{row.emissaoXEnvio}</td>
                        <td>{row.revisao}</td>
                        <td>{row.dataRevisao}</td>
                        <td>{row.dataRelatorioAssinado}</td>
                        <td>{row.elaboradoPor}</td>
                        <td>{row.status}</td>
                        <td>{row.statusAtraso}</td>
                        <td>{row.contagemAtraso}</td>
                        <td>{row.contagemNoPrazo}</td>
                    </tr>
                    ))}
                    </tbody>
                </table>
            
        </div>
  );
}