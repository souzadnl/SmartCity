import { Link } from "react-router-dom"

export default function Menu() {
    return(
        <>
            <div className="mt-16 p-2 bg-blue-500">
                <div className="w-2/6 m-auto flex justify-between">
                    <Link className="text-white">Temperatura</Link>
                    <Link className="text-white">Umidade</Link>
                    <Link className="text-white">Luminosidade</Link>
                </div>
            </div>
        </>
    )
}