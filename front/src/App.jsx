import './App.css'
import responsiveness from './Responsiveness'
import { Button, ButtonGroup } from "@nextui-org/button";

function App() {

  // Aqui as constantes abaixo são definidas de acordo com o dicionário que vem da função responsiveness()
  const { isDesktop, isNotebook, isTablet, isMobile } = responsiveness();

  return (
    <>
      <div>

        {/* Cada renderização condicional abaixo funciona com base na mediaQuery das constantes */}
        {/* Então quando a tela estiver no tamanho de Mobile, o que será renderizado é o que estiver dentro de da estrutura de condição*/}
        {isMobile && <p>Celular</p>}
        {isTablet && <p>Tablet</p>}
        {isNotebook && <p>Notebook</p>}
        {isDesktop && <p>Desktop</p>}

        <Button color="primary">
          Button
        </Button>
      </div>
    </>
  )
}

export default App
