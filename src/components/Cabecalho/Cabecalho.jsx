import React from "react";
import Link from "next/link";

export default function Cabecalho() {
  return (
    <>
      <header className="bg-transparent flex justify-between items-center h-28">
        <div className="flex items-center">
          <div>
            <Link href="/">Home</Link>
          </div>
        </div>

        <nav className="flex flex-row justify-around">
          <Link className="link-cabecalho" href="/api/cadastro">Cadastro</Link>
          <Link className="link-cabecalho" href="/api/view">Busca</Link>
        </nav>
      </header>
    </>
  );
}