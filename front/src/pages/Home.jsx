import Menu from "../components/Menu"
import Painel from "../components/Painel"
import PainelMap from "../components/PainelMap"
import Celular from "../assets/Celular.png"
import { Button } from "@nextui-org/react"
import Footer from "../components/Footer"

export default function Home() {
    return (
        <>
            <Menu />
            <section>
                <div className="bg-blue-500 items-center grid grid-cols-3 h-[32rem]">
                    <Painel />
                    <PainelMap />
                    <div className="text-right mt-auto mb-3 flex justify-around">
                        <p className='text-white text-small'>lat -22.345.23 long -47.234.21</p>
                        <p className="text-white text-small">Senai Roberto Mange  •</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="grid grid-cols-2">
                    <div className="flex items-center justify-center">
                        <div className="w-3/4">
                            <h1 className="text-blue-500 text-3xl mb-5">Smart City Mobile App</h1>
                            <p className="mb-8">Lorem ipsum dolor sit amet consectetur. Diam fermentum donec sollicitudin aliquam faucibus gravida platea tellus.
                                Lorem ipsum dolor sit amet consectetur. Diam fermentum donec sollicitudin aliquam faucibus gravida platea tellus.</p>

                            <Button className="bg-blue-500 text-white w-40">Download</Button>
                        </div>
                    </div>

                    <div>
                        <img src={Celular} alt="celular" />
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}