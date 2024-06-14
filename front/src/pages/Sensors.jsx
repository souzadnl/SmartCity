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
            const response = await axios.get('http://bedon.pythonanywhere.com/api/sensores/', {
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

    const edit = (id) => {
        navigate(`/edit/${id}`);
    };

    const exclude = (id) => {
        if (id) {
            axios.delete(`http://bedon.pythonanywhere.com/api/sensores/${id}`)
            alert("Sensor deletado com sucesso!")
            window.location.reload()
        }
        console.log("Não há id")
    }

    return (
        <div className="min-h-screen mt-36">
            <div className="flex items-center justify-center">
                <form onSubmit={(e) => { e.preventDefault(); criarSensor(); }}>
                    <div>
                        <h1 className="text-5xl flex justify-center mb-5">Manage your sensors</h1>
                    </div>

                    <div className="w-2/4 m-auto py-5">
                        <Button type="submit" onClick={() => navigate("/register")} color="primary" className="w-1/4 m-auto flex justify-center">Register</Button>
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
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"></th>
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
                                                <Button auto onClick={() => edit(sensor.id)} className="bg-yellow-500 text-white">Edit</Button>
                                            </td>
                                            <td className="px-6 py-4">
                                                <Button auto onClick={() => exclude(sensor.id)} className="bg-danger text-white">Delete</Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
}
