import { redirect } from "next/navigation";

export default async function BikesCadastradas() {
    let bikes = [];

    try {
        const response = await fetch('http://localhost:3000/api/bike/0');
        bikes = await response.json();
    } catch (error) {
        console.log(error);
        redirect('/error');
    }

    return (
        <div>
            <h1>Bike</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Nº de Série</th>
                            <th>Modelo</th>
                            <th>Preço</th>
                            <th>Marca</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bikes.map((bike, index) => (
                            <tr key={index}>
                                <td>{bike.numSerie}</td>
                                <td>{bike.modelo}</td>
                                <td>{bike.preco}</td>
                                <td>{bike.marca}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
