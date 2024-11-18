import React from "react";
import MenuItem from "./MenuItem";
import { ReactComponent as Logo } from "../assets/icons/Logo.svg";
import {
  FaUser,
  FaFileInvoiceDollar,
  FaFolderOpen,
  FaShieldAlt,
  FaFile,
  FaIdCard,
  FaClipboardCheck,
  FaCommentDots,
  FaHome,
  FaNetworkWired,
  FaFileAlt,
  FaCalendarDay,
  FaTable,
  FaChartLine,
  FaMoneyBillAlt,
} from "react-icons/fa"; // Importa os ícones necessários
import "./Sidebar.css"; // Importa o CSS do Sidebar

function Sidebar() {
  const handleMenuClick = (item) => {
    console.log(`Menu item clicked: ${item}`);
  };

  return (
    <div className="sidebar">
      <div className="logo-container">
        <Logo className="logo" />
      </div>
      <MenuItem
        label="Pessoas"
        icon={<FaUser className="icon" />}
        onClick={() => handleMenuClick("Pessoas")}
      />
      <MenuItem
        label="Folha de Pagamento"
        icon={<FaFileInvoiceDollar className="icon" />}
        onClick={() => handleMenuClick("Folha de Pagamento")}
      />
      <MenuItem
        label="Arquivos Institucionais"
        icon={<FaFolderOpen className="icon" />}
        onClick={() => handleMenuClick("Arquivos Institucionais")}
      />
      <MenuItem
        label="Segurança de Acesso"
        icon={<FaShieldAlt className="icon" />}
        onClick={() => handleMenuClick("Segurança de Acesso")}
      />
      <MenuItem
        label="e-Social"
        icon={<FaFile className="icon" />}
        onClick={() => handleMenuClick("e-Social")}
      />
      <MenuItem
        label="Folha Estagiário / Menor Aprendiz / Bolsista"
        icon={<FaIdCard className="icon" />}
        onClick={() =>
          handleMenuClick("Folha Estagiário / Menor Aprendiz / Bolsista")
        }
      />
      <MenuItem
        label="Concursos"
        icon={<FaClipboardCheck className="icon" />}
        onClick={() => handleMenuClick("Concursos")}
      />
      <MenuItem
        label="Comunicação Administrativa"
        icon={<FaCommentDots className="icon" />}
        onClick={() => handleMenuClick("Comunicação Administrativa")}
      />
      <MenuItem
        label="Inicial"
        icon={<FaHome className="icon" />}
        onClick={() => handleMenuClick("Inicial")}
      />
      <MenuItem
        label="Comunicação Administrativa"
        icon={<FaCommentDots className="icon" />}
        onClick={() => handleMenuClick("Comunicação Administrativa")}
      />
      <MenuItem
        label="Integração"
        icon={<FaNetworkWired className="icon" />}
        onClick={() => handleMenuClick("Integração")}
      />
      <MenuItem
        label="Processos Administrativos"
        icon={<FaFileAlt className="icon" />}
        onClick={() => handleMenuClick("Processos Administrativos")}
      />
      <MenuItem
        label="Diárias"
        icon={<FaCalendarDay className="icon" />}
        onClick={() => handleMenuClick("Diárias")}
      />
      <MenuItem
        label="Tabelas Básicas"
        icon={<FaTable className="icon" />}
        onClick={() => handleMenuClick("Tabelas Básicas")}
      />
      <MenuItem
        label="Gerencial"
        icon={<FaChartLine className="icon" />}
        onClick={() => handleMenuClick("Gerencial")}
      />
      <MenuItem
        label="EFD-Reinf"
        icon={<FaMoneyBillAlt className="icon" />}
        onClick={() => handleMenuClick("EFD-Reinf")}
      />
    </div>
  );
}

export default Sidebar;
