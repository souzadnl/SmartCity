import { Card } from "@nextui-org/react";
import PainelElement from "./PainelElement";

export default function Painel({ sensor, sensorData }) {
    return (
        <>
            <div className="flex flex-wrap w-72 gap-8 ml-32 h-2/4">
                <PainelElement sensorType="Tipo" measure={sensor.tipo} title="Quantidade de pessoas" subtitle="Medida referente as pessoas que passaram pelo local." />
                <PainelElement sensorType="Valor" measure={sensor.localizacao} title="Umidade do ambiente" subtitle="Medida referente a umidade do ar do local." />
                <PainelElement sensorType="Temperatura" measure={sensorData.valor} title="Temperatura do ambiente" subtitle="Medida referente a temperatura do local." />
                <PainelElement sensorType="Luminosidade" measure={sensorData.timestamp} title="Luminosidade do ambiente" subtitle="Medida referente a luminosidade do local." />
            </div>
        </>
    )
}