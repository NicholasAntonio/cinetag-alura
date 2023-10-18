import Cabecalho from "components/Cabecalho";
import Container from "components/Container";
import Rodape from "components/Rodape";
import FavoritosProvider from "contexts/Favoritos";
import { Outlet } from "react-router-dom";

export default function PaginaBase(){
    return(
        <main>
            <Cabecalho />
            <FavoritosProvider>
                <Container>
                    <Outlet /> 
                </Container>
            </FavoritosProvider>
            <Rodape />
        </main>
    )
}

// Outlet faz com que uma rota pai possa ser criada e tudo que vai organizar as rotas consiga ficar centralizado em um arquivo de pagina base