import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";

export default function EditSensor() {
    const { id } = useParams();
    const navigate = useNavigate();
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
            const response = await axios.get(`http://bedon.pythonanywhere.com/api/sensores/${id}/`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            setResponsavel(response.data.responsavel)
            setLocalizacao(response.data.localizacao)
            setUnidade_medida(response.data.unidade_medida)
            setTipo(response.data.tipo)
            setObservacao(response.data.observacao)
            setMacAddress(response.data.mac_Address)
            setLongitude(response.data.longitude)
            setStatus_operacional(response.data.status_operacional)
            setLatitude(response.data.latitude)

        } catch (error) {
            console.error("Failed to fetch sensor data:", error);
        }
    };

    const atualizar = async () => {
        try {
            await axios.put(`http://bedon.pythonanywhere.com/api/sensores/${id}/`,
                {
                    responsavel,
                    localizacao,
                    unidade_medida,
                    tipo,
                    observacao,
                    mac_address,
                    longitude,
                    status_operacional,
                    latitude
                }
                , {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
            alert("Sensor editado com sucesso!")
            window.location.reload()
        } catch (error) {
            console.error("Falha ao atualizar sensor", error);
        }
    };

    return (
        <>
            <div className="bg-slate-50 min-h-screen">
                <div className="flex items-center justify-center h-screen">
                    <form onSubmit={(e) => { e.preventDefault(); atualizar(); }}>
                        <div>
                            <h1 className="text-5xl flex justify-center mb-5">Edit your sensor</h1>
                        </div>

                        <div className="w-full m-auto grid grid-cols-3 gap-12 py-12">
                            <div>
                                <Input type="text" variant="underlined" label="Responsavel" value={responsavel} onChange={(e) => setResponsavel(e.target.value)} />
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