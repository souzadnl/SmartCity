import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";

export default function EditSensor() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [sensorData, setSensorData] = useState({});
    const [responsavel, setResponsavel] = useState('')
    const [tipo, setTipo] = useState('')
    const [mac_address, setMacAddress] = useState('')
    const [localizacao, setLocalizacao] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [unidade_medida, setUnidade_medida] = useState('')
    const [observacao, setObservacao] = useState('')
    const [status_operacional, setStatus_operacional] = useState('')

    const [token, setToken] = useState(null);

    useEffect(() => {
        const tokenStoraged = sessionStorage.getItem('token');
        if (tokenStoraged) {
            setToken(tokenStoraged);
            fetchSensorData(tokenStoraged);
        } else {
            console.error("Token não encontrado");
        }
    }, []);

    const fetchSensorData = async (token) => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/sensores/${id}/`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setSensorData(response.data);
        } catch (error) {
            console.error("Failed to fetch sensor data:", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSensorData({ ...sensorData, [name]: value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://127.0.0.1:8000/api/sensores/${id}/`, sensorData, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            navigate("/sensors");
        } catch (error) {
            console.error("Failed to update sensor:", error);
        }
    };

    return (
        <>
            <div className="bg-slate-50 min-h-screen">
                <div className="flex items-center justify-center h-screen">
                    <form onSubmit={(e) => { e.preventDefault(); criarSensor(); }}>
                        <div>
                            <h1 className="text-5xl flex justify-center mb-5">Register your sensor</h1>
                        </div>

                        <div className="w-full m-auto grid grid-cols-3 gap-12 py-12">
                            <div>
                                <Input type="text" variant="underlined" label="Responsavel" value={responsavel} defaultValue="" onChange={(e) => setResponsavel(e.target.value)} />
                                <Input type="text" variant="underlined" label="Tipo" value={tipo} onChange={(e) => setTipo(e.target.value)} />
                                <Input type="text" variant="underlined" label="Mac_address" value={mac_address} onChange={(e) => setMacAddress(e.target.value)} />
                            </div>

                            <div>
                                <Input type="text" variant="underlined" label="Localizacao" value={localizacao} onChange={(e) => setLocalizacao(e.target.value)} />
                                <Input type="text" variant="underlined" label="Latitude" value={latitude} onChange={(e) => setLatitude(e.target.value)} />
                                <Input type="text" variant="underlined" label="Longitude" value={longitude} onChange={(e) => setLongitude(e.target.value)} />
                            </div>

                            <div>
                                <Input type="text" variant="underlined" label="Unidade de medida" value={unidade_medida} onChange={(e) => setUnidade_medida(e.target.value)} />
                                <Input type="text" variant="underlined" label="Observacao" value={observacao} onChange={(e) => setObservacao(e.target.value)} />
                                <Input type="text" variant="underlined" label="Status operacional" value={status_operacional} onChange={(e) => setStatus_operacional(e.target.value)} />
                            </div>
                        </div>

                        <div className="w-2/4 m-auto py-5">
                            <Button type="submit" color="primary" className="w-1/4 m-auto flex justify-center">Cadastrar</Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}