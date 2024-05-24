import './App.css'
import responsiveness from './Responsiveness'
import Desktop from './queries/Desktop';
import Mobile from './queries/Mobile';
import Notebook from './queries/Notebook';
import Tablet from './queries/Tablet';

function App() {

  // Aqui as constantes abaixo são definidas de acordo com o dicionário que vem da função responsiveness()
  const { isDesktop, isNotebook, isTablet, isMobile } = responsiveness();

  return (
    <>
      <div>

        {/* Cada renderização condicional abaixo funciona com base na mediaQuery das constantes */}
        {/* Então quando a tela estiver no tamanho de Mobile, o que será renderizado é o que estiver dentro de da estrutura de condição*/}
        {/* Neste caso, para casa condição há uma tela com tamanho específica que será renderizada */}
        {isMobile &&
          <Mobile/>
        }

        {isTablet &&
          <Tablet/>
        }

        {isNotebook &&
          <Notebook/>
        }

        {isDesktop &&
          <Desktop/>
        }


      </div>
    </>
  )
}

export default App
