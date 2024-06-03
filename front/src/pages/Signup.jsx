import Forms from "../components/Forms"
import Map from "../assets/Map_flipped.png"

export default function Signup() {
    return (
        <div className="bg-slate-50 grid grid-cols-2 min-h-screen">

            <div className="flex items-center justify-center h-screen">
                <Forms
                    title="Bem-vindo à SmartCity!"
                    subtitle="Por gentileza, insira as informações necessárias no formulário abaixo para a criação da sua conta."
                    textButton="Entrar"
                    span="Não possui cadastro?"
                    link="Clique aqui"
                />
            </div>

            <div>
                <img src={Map} alt="Map"
                className="
                    -rotate-12
                    fixed
                    ml-32
                    mt-60
                    flip-vertical
                    transform flip-vertical"
                />
            </div>

        </div>
    )
}