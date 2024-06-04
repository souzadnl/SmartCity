import { Link } from "react-router-dom"

export default function Menu() {
    return(
        <>
            <div className="mt-20 p-2 bg-gray-100">
                <div className="w-2/6 m-auto flex justify-between">
                    <Link className="text-blue-500">Temperatura</Link>
                    <Link className="text-blue-500">Umidade</Link>
                    <Link className="text-blue-500">Luminosidade</Link>
                </div>
            </div>
        </>
    )
}