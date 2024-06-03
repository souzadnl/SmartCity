import Map from "../assets/Map.png"
import InputPassword from "../components/InputPassword"
import { Button } from "@nextui-org/react"
import { Link } from "react-router-dom"
import { Input } from "@nextui-org/react"

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

                <form action="">
                    <div className="">
                        <h1 className="text-5xl flex justify-center mb-5">Bem-vindo de volta!</h1>
                        <p className="text-xl flex justify-center w-3/5 m-auto text-center text-gray-500">Estamos felizes em vê-lo de volta. Por favor, entre com sua conta para continuar aproveitando nossos serviços.</p>
                    </div>

                    <div className="w-2/4 m-auto grid gap-12 py-12">
                        <Input type="email" variant="underlined" label="Email" />
                        <InputPassword label="Senha" />
                    </div>

                    <div className="w-2/4 m-auto py-5">
                        <Button type="submit" color="primary" className="w-1/4 m-auto flex justify-center">Entrar</Button>

                        <div className="flex justify-center m-auto mt-5">
                            <span className="text-gray-500">Não possui cadastro?</span>
                            <Link to="/signup" className="text-sky-500 ml-1">Clique aqui</Link>
                        </div>
                    </div>

                </form>
            </div>

        </div>
    )
}