import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Cabecalho() {
  return (
    <>
      <header className="bg-transparent flex justify-between items-center h-28">
        <nav className="flex flex-row justify-around">
          <Link className="link-cabecalho" href="/api/cadastros/cliente"> Cadastrar-se como cliente |</Link>
          <Link className="link-cabecalho" href="/api/cadastros/bike"> Cadastrar bike |</Link>
          <Link className="link-cabecalho" href="/api/cadastros/acessorio"> Cadastrar acessórios</Link>
        </nav>
      </header>
    </>
  );
}