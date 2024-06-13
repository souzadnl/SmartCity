import React, { useState, useEffect } from "react";
import Menu from "../components/Menu";
import Painel from "../components/Painel";
import PainelMap from "../components/PainelMap";
import Celular from "../assets/Celular.png";
import { Button } from "@nextui-org/react";
import Footer from "../components/Footer";
import axios from "axios";

export default function Home() {
    const [token, setToken] = useState('');
    const [sensores, setSensores] = useState([]);
    const [escolha, setEscolha] = useState('');
    const [sensor, setSensor] = useState('');
    const [sensorData, setSensorData] = useState('');
    const [selectedButton, setSelectedButton] = useState('');

    useEffect(() => {
        const tokenStoraged = sessionStorage.getItem('token');
        if (tokenStoraged) {
            setToken(tokenStoraged);
        }
    }, []);

    useEffect(() => {
        if (token) {
            getSensores();
        }
    }, [token, escolha]);

    const getSensores = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/sensores/?tipo=${escolha}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setSensores(response.data);
        } catch (error) {
            console.error("Failed to fetch sensores:", error);
        }
    };

    const handleEscolhaChange = (novaEscolha) => {
        setEscolha(novaEscolha);
        setSelectedButton(novaEscolha);
    };

    const handleSensorChange = async (sensor) => {
        setSensor(sensor);
        try {
            const response = await axios.post(`http://127.0.0.1:8000/api/${sensor.tipo.toLowerCase()}_filter/`, {
                'sensor_id': sensor.id
            },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
            setSensorData(response.data);
        } catch (error) {
            console.error("Failed to fetch sensor data:", error);
        }
    };

    return (
        <>
            <Menu onEscolhaChange={handleEscolhaChange} />
            <section>
                <div className="bg-blue-500 items-center grid grid-cols-3 h-[32rem]">
                    <Painel sensor={sensor} sensorData={sensorData} />
                    <PainelMap sensores={sensores} onClickMarker={handleSensorChange} />
                    <div className="text-right mt-auto mb-3 flex justify-around">
                        <p className='text-white text-small'>lat -22.345.23 long -47.234.21</p>
                        <p className="text-white text-small">Senai Roberto Mange  •</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="grid grid-cols-2">
                    <div className="flex items-center justify-center">
                        <div className="w-3/4">
                            <h1 className="text-blue-500 text-3xl mb-5">SmartCity Mobile App</h1>
                            <p className="mb-8">Lorem ipsum dolor sit amet consectetur. Diam fermentum donec sollicitudin aliquam faucibus gravida platea tellus.
                                Lorem ipsum dolor sit amet consectetur. Diam fermentum donec sollicitudin aliquam faucibus gravida platea tellus.</p>

                            <Button className="bg-blue-500 text-white w-40">Download</Button>
                        </div>
                    </div>

                    <div>
                        <img src={Celular} alt="celular" />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
