import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Cabecalho() {
  return (
    <>
      <header className="bg-transparent flex justify-between items-center h-28">
        <div className="flex items-center">
            <div>
                <Link href="/">
                <Image
                    src="/img/porto-seguro-logo.png"
                    alt="Logo da Porto"
                    width={200}
                    height={70}
                />
                </Link>
            </div>
        </div>

        <nav className="flex flex-row justify-around">
          <Link className="link-cabecalho" href="/api/home-cadastros">Cadastro |</Link>
          <Link className="link-cabecalho" href="/api/login"> Login |</Link>
          <Link className="link-cabecalho" href="/api/bikes"> Bikes |</Link>
          <Link className="link-cabecalho" href="/api/acessorios"> Acessórios</Link>
        </nav>
      </header>
    </>
  );
}