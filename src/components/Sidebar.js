import React from "react";
import MenuItem from "./MenuItem";
import "./Sidebar.css";

function Sidebar() {
  const handleMenuClick = (item) => {};

  return (
    <div className="sidebar">
      <div className="Empresa">VOBYS</div>
      <MenuItem label="Pessoas" onClick={() => handleMenuClick("Pessoas")} />
      <MenuItem
        label="Folha de Pagamento"
        onClick={() => handleMenuClick("Folha de Pagamento")}
      />
      <MenuItem
        label="Arquivos Institucionais"
        onClick={() => handleMenuClick("Arquivos Institucionais")}
      />
      <MenuItem
        label="Segurança de Acesso"
        onClick={() => handleMenuClick("Segurança de Acesso")}
      />
      <MenuItem label="e-Social" onClick={() => handleMenuClick("e-Social")} />
      <MenuItem
        label="Folha Estagiário / Menor Aprendiz / Bolsista"
        onClick={() =>
          handleMenuClick("Folha Estagiário / Menor Aprendiz / Bolsista")
        }
      />
      <MenuItem
        label="Concursos"
        onClick={() => handleMenuClick("Concursos")}
      />
      <MenuItem
        label="Comunicação Administrativa"
        onClick={() => handleMenuClick("Comunicação Administrativa")}
      />
      <MenuItem label="Inicial" onClick={() => handleMenuClick("Inicial")} />
      <MenuItem
        label="Integração"
        onClick={() => handleMenuClick("Integração")}
      />
      <MenuItem
        label="Processos Administrativos"
        onClick={() => handleMenuClick("Processos Administrativos")}
      />
      <MenuItem label="Diárias" onClick={() => handleMenuClick("Diárias")} />
      <MenuItem
        label="Tabelas Básicas"
        onClick={() => handleMenuClick("Tabelas Básicas")}
      />
      <MenuItem
        label="Gerencial"
        onClick={() => handleMenuClick("Gerencial")}
      />
      <MenuItem
        label="EFD-Reinf"
        onClick={() => handleMenuClick("EFD-Reinf")}
      />
    </div>
  );
}

export default Sidebar;
