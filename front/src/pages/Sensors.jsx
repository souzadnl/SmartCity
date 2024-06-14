import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Sensors() {
    const navigate = useNavigate();
    const [sensores, setSensores] = useState([]);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const tokenStoraged = sessionStorage.getItem('token');
        if (tokenStoraged) {
            setToken(tokenStoraged);
        } else {
            console.error("Token não encontrado");
        }
    }, []);

    useEffect(() => {
        if (token) {
            getSensores();
        }
    }, [token]);

    const getSensores = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/sensores/', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setSensores(response.data);
        } catch (error) {
            console.error("Failed to fetch sensores:", error);
        }
    };

    console.log(sensores);

    const handleEdit = (id) => {
        navigate(`/edit/${id}`);
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="flex items-center justify-center">
                <form onSubmit={(e) => { e.preventDefault(); criarSensor(); }}>
                    <div>
                        <h1 className="text-5xl flex justify-center mb-5">Register your sensor</h1>
                    </div>

                    <div className="w-full m-auto grid gap-12 py-12">
                        <div className="bg-white shadow-md rounded-lg p-4">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tipo</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Localização</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Responsável</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ações</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {sensores.map((sensor) => (
                                        <tr key={sensor.id}>
                                            <td className="px-6 py-4">{sensor.id}</td>
                                            <td className="px-6 py-4">{sensor.tipo}</td>
                                            <td className="px-6 py-4">{sensor.localizacao}</td>
                                            <td className="px-6 py-4">{sensor.responsavel}</td>
                                            <td className="px-6 py-4">
                                                <Button auto onClick={() => handleEdit(sensor.id)}>Editar</Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="w-2/4 m-auto py-5">
                        <Button type="submit" color="primary" className="w-1/4 m-auto flex justify-center">Cadastrar</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
