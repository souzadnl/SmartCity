import Map from "../assets/Map_flipped.png"
import InputPassword from "../components/InputPassword"
import InputText from "../components/InputText"
import { Button } from "@nextui-org/react"
import { Link } from "react-router-dom"
import { Input } from "@nextui-org/react"
import useState from "react"

export default function Signup() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState(null)

    useEffect(() => {
        if (token) {
            const tokenX = token;
            localStorage.setItem('token', tokenX)
        }
    }, [token]);

    const createUser = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/create_user/',
                {
                    username: usuario,
                    password: password,
                });

            const resp = await axios.post('http://127.0.0.1:8000/token/',
                {
                    username: usuario,
                    password: password,
                })
            setToken(resp.data.access)
        }
        catch (error) {
            setErro(error.message);
        }
    };


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
                        <Button type="submit" color="primary" className="w-1/4 m-auto flex justify-center" onClick={() => createUser()}>Cadastrar</Button>

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