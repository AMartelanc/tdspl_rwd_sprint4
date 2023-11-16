"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";


export default function Cadastro() {
  const [novaBike, setNovaBike] = useState({
    info: "cadastro",
    numSerie:"",
    preco: "",
    marca: "",
    modelo: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNovaBike({ ...novaBike, [name]: value });
  };

  const handleCadastro = async (e) => {
    e.preventDefault();

    try {
      const resposta = await fetch("http://localhost:8080/07-WebApi/api/bike", {
        method: "POST",
        body: JSON.stringify(novaBike),
      });

      const resultado = await resposta.json();
      console.log(resultado)
      console.log(resposta.status)

    } catch (error) {
      console.log("ocorreu um erro no envio dos dados",error)
      // window.location.href = "/cadastros/bike" 
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
          <legend className="text-xl font-bold mb-3 text-center">Cadastrar Bike</legend>
          <div>
            <label className="block text-sm  font-bold mb-2" htmlFor="idNovoNumSerie">
              Número de série:
            </label>
            <input
              className="w-full  border-2 border-cyan-500 rounded-md py-2 px-3"
              type="text"
              name="numSerie"
              id="idNumSerie"
              placeholder="Número de série"
              value={novaBike.numSerie}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="idNovoPreco">
              Preço:
            </label>
            <input
              className="w-full border-2 border-cyan-500 rounded-md py-2 px-3"
              type="text"
              name="preco"
              id="idPreco"
              placeholder="Preco"
              value={novaBike.preco}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm  font-bold mb-2" htmlFor="idNovaMarca">
              Marca:
            </label>
            <input
              className="w-full  border-2 border-cyan-500 rounded-md py-2 px-3"
              type="text"
              name="marca"
              id="idMarca"
              placeholder="Marca"
              value={novaBike.marca}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2" htmlFor="idModelo">
              Modelo:
            </label>
            <input
              className="w-full  border-2 border-cyan-500 rounded-md py-2 px-3"
              type="text"
              name="modelo"
              id="idModelo"
              placeholder="Modelo"
              value={novaBike.modelo}
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