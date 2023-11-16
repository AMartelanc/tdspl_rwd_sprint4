import { redirect } from "next/navigation";

export default async function AcessoriosCadastrados() {
    let acessorios = [];

    try {
        const response = await fetch('http://localhost:3000/api/acessorio/0');
        acessorios = await response.json();
    } catch (error) {
        console.log(error);
        redirect('/error');
    }

    return (
        <div>
            <h1>Acessórios da Bike</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Preço</th>
                            <th>Marca</th>
                        </tr>
                    </thead>
                    <tbody>
                        {acessorios.map((acessorio, index) => (
                            <tr key={index}>
                                <td>{acessorio.nome}</td>
                                <td>{acessorio.preco}</td>
                                <td>{acessorio.marca}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
