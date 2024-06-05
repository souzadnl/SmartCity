import { Card } from "@nextui-org/react";
import PainelElement from "./PainelElement";

export default function Painel() {
    return (
        <>
            <div className="flex flex-wrap w-72 gap-8 ml-32 h-2/4">
                <PainelElement sensorType="Pessoas" measure="8" title="Quantidade de pessoas" subtitle="Medida referente as pessoas que passaram pelo local." />
                <PainelElement sensorType="Umidade" measure="37%" title="Umidade do ambiente" subtitle="Medida referente a umidade do ar do local." />
                <PainelElement sensorType="Temperatura" measure="22°" title="Temperatura do ambiente" subtitle="Medida referente a temperatura do local." />
                <PainelElement sensorType="Luminosidade" measure="Acesa" title="Luminosidade do ambiente" subtitle="Medida referente a luminosidade do local." />
            </div>
        </>
    )
}