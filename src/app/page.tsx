import Image from "next/image";
//import styles from "./page.module.css";
import OrdemTable from "@/components/ordemTable";

const data = [
    {
      id: 1,
      cliente: "Cliente A",
      numeroOS: "OS-001",
      ss: "SS-001",
      dataCriacaoSS: "01/08/2025",
      osCliente: "OS Cliente A",
      descricaoOS: "Descrição do serviço",
      inicioServico: "02/08/2025",
      terminoServico: "03/08/2025",
      duracao: "1 dia",
      numeroCAFT: "1234",
      vencimentoCAFT: "10/08/2025",
      numeroPOM: "5678",
      tipoServico: "Manutenção",
      local: "Base X",
      cidade: "Araruama",
      supervisor: "Supervisor 1",
      numeroRefRelatorio: "Ref-001",
      relatorioIniciado: "01/08/2025",
      dataEmissaoRelatorio: "04/08/2025",
      dataEnvioRelatorio: "05/08/2025",
      emissaoXEnvio: "1 dia",
      revisao: "Revisado",
      dataRevisao: "06/08/2025",
      dataRelatorioAssinado: "07/08/2025",
      elaboradoPor: "Matheus",
      status: "Concluído",
      statusAtraso: "No prazo",
      contagemAtraso: "0",
      contagemNoPrazo: "1",
    },
    {
      id: 2,
      cliente: "Cliente B",
      numeroOS: "OS-002",
      ss: "SS-002",
      dataCriacaoSS: "02/08/2025",
      osCliente: "OS Cliente B",
      descricaoOS: "Descrição do serviço B",
      inicioServico: "03/08/2025",
      terminoServico: "04/08/2025",
      duracao: "1 dia",
      numeroCAFT: "2345",
      vencimentoCAFT: "11/08/2025",
      numeroPOM: "6789",
      tipoServico: "Instalação",
      local: "Base Y",
      cidade: "Rio de Janeiro",
      supervisor: "Supervisor 2",
      numeroRefRelatorio: "Ref-002",
      relatorioIniciado: "02/08/2025",
      dataEmissaoRelatorio: "05/08/2025",
      dataEnvioRelatorio: "06/08/2025",
      emissaoXEnvio: "1 dia",
      revisao: "Pendente",
      dataRevisao: "-",
      dataRelatorioAssinado: "-",
      elaboradoPor: "João",
      status: "Em andamento",
      statusAtraso: "Atrasado",
      contagemAtraso: "1",
      contagemNoPrazo: "0",
    }]

export default function Home() {
  return (
    <div>
      <main >
        <OrdemTable data={data} />
      </main>
      <footer >
        
      </footer>
    </div>
  );
}
