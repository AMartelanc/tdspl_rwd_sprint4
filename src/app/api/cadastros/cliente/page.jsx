"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";


export default function Cadastro() {
  const [novoUsuario, setNovoUsuario] = useState({
    info: "cadastro",
    nome: "",
    cpf: "",
    nmUsuario:"",
    senhaUsuario:"",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNovoUsuario({ ...novoUsuario, [name]: value });
  };

  const handleCadastro = async (e) => {
    e.preventDefault();

    try {
      const resposta = await fetch("http://localhost:8080/07-WebApi/api/cliente", {
        method: "POST",
        body: JSON.stringify(novoUsuario),
      });

      const resultado = await resposta.json();
      console.log(resultado)
      console.log(resposta.status)

    } catch (error) {
      console.log("ocorreu um erro no envio dos dados",error)
      // window.location.href = "/cadastros/cliente" 
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <form className="w-full max-w-md p-4 bg-white shadow-lg border-4 border-cyan-500 rounded-lg" onSubmit={handleCadastro}>
      <div className="flex justify-center p-0">
          <Image
            src="/img/porto-seguro-logo.png"
            alt="Logo da Porto"
            width={250}
            height={80}
          />
        </div>
        <fieldset>
          <legend className="text-xl font-bold mb-3 text-center">Cadastrar Usuario</legend>
          <div>
            <label className="block text-sm font-bold mb-2" htmlFor="idNome">
              Nome:
            </label>
            <input
              className="w-full  border-2 border-cyan-500 rounded-md py-2 px-3"
              type="text"
              name="nome"
              id="idNome"
              placeholder="Nome"
              value={novoUsuario.nome}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="idNovoCpf">
              CPF:
            </label>
            <input
              className="w-full border-2 border-cyan-500 rounded-md py-2 px-3"
              type="text"
              name="cpf"
              id="idCpf"
              placeholder="CPF"
              value={novoUsuario.cpf}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm  font-bold mb-2" htmlFor="idNovaNasc">
              Data de Nascimento:
            </label>
            <input
              className="w-full  border-2 border-cyan-500 rounded-md py-2 px-3"
              type="text"
              name="nasc"
              id="idNasc"
              placeholder="(DD/MM/YY)"
              value={novoUsuario.nasc}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm  font-bold mb-2" htmlFor="idNovaNmUsuario">
              Usuário:
            </label>
            <input
              className="w-full  border-2 border-cyan-500 rounded-md py-2 px-3"
              type="text"
              name="nmUsuario"
              id="idNmUsuario"
              placeholder="Nome de Usuário"
              value={novoUsuario.nmUsuario}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm  font-bold mb-2" htmlFor="idNovaSenhaUsuario">
              Senha:
            </label>
            <input
              className="w-full  border-2 border-cyan-500 rounded-md py-2 px-3"
              type="text"
              name="senhaUsuario"
              id="idSenhaUsuario"
              placeholder="Senha"
              value={novoUsuario.senhaUsuario}
              onChange={handleChange}
            />
          </div>
          <div className="text-center mt-6">
            <button className="bg-cyan-500 text-white py-2 px-4 rounded-md hover:bg-cyan-700 transition-all duration-500 ease-out">Cadastrar</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}