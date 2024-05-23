// Importacao da biblioteca react-responsive
import { useMediaQuery } from 'react-responsive'

// Aqui são definido os 4 tipos de telas utilizando uma constante <nomeDaTela> = UseMediaQuery({ query: '(<tamanho da query que vai utilizar>)'})
// Então é retornado um dicionário com os tamanhos das telas
const responsiveness = () => {
    const isDesktop = useMediaQuery({ query: '(min-width: 1225px)' });
    const isNotebook = useMediaQuery({ query: '(min-width: 993px) and (max-width: 1224px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 481px) and (max-width: 992px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 480px)' });

    return { isDesktop, isNotebook, isTablet, isMobile };
};

export default responsiveness;