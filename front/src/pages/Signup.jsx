import Map from "../assets/Map_flipped.png"
import InputPassword from "../components/InputPassword"
import InputText from "../components/InputText"
import { Button } from "@nextui-org/react"
import { Link } from "react-router-dom"
import { Input } from "@nextui-org/react"

export default function Signup() {
    return (
        <div className="bg-slate-50 grid grid-cols-2 min-h-screen">

            <div className="flex items-center justify-center h-screen">

                <form action="">
                    <div className="">
                        <h1 className="text-5xl flex justify-center mb-5">Bem-vindo à SmartCity!</h1>
                        <p className="text-xl flex justify-center w-3/5 m-auto text-center text-gray-500">Por gentileza, insira as informações necessárias no formulário abaixo para a criação da sua conta.</p>
                    </div>

                    <div className="w-2/4 m-auto grid gap-12 py-12">
                        <Input type="text" variant="underlined" label="Nome Completo" />
                        <Input type="email" variant="underlined" label="Email" />
                        <InputPassword label="Senha" />

                    </div>

                    <div className="w-2/4 m-auto py-5">
                        <Button type="submit" color="primary" className="w-1/4 m-auto flex justify-center">Cadastrar</Button>

                        <div className="flex justify-center m-auto mt-5">
                            <span className="text-gray-500">Já possui cadastro?</span>
                            <Link to="/login" className="text-sky-500 ml-1">Clique aqui</Link>
                        </div>
                    </div>

                </form>

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