import { Button } from "@nextui-org/react"
import { Link } from "react-router-dom"

export default function Forms(props) {
    return (
        <form action="">
            <div>
                <h1>{props.title}</h1>
                <span>{props.subtitle}</span>
            </div>

            <Button type="submit" color="primary">{props.textButton}</Button>

            <div className="flex">
                <span>{props.span}</span>
                <Link className="text-sky-500">{props.link}</Link>
            </div>

        </form>
    )
}