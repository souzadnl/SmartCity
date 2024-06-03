import Forms from "../components/Forms"
import Map from "../assets/Map.png"

export default function Login() {
    return (
        <div className="bg-slate-50 grid grid-cols-2 min-h-screen">

            <div>
                <img src={Map} alt="Map"
                className="
                    rotate-12
                    fixed
                    xl:mt-40
                    mr-96"
                />
            </div>

            <div className="flex items-center justify-center h-screen">
                <Forms
                    title="Bem-vindo de volta!"
                    subtitle="Estamos felizes em vê-lo de volta. Por favor, entre com sua conta para continuar aproveitando nossos serviços."
                    textButton="Entrar"
                    span="Não possui cadastro?"
                    link="Clique aqui"
                />
            </div>

        </div>
    )
}