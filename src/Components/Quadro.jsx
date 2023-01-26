
import "./Quadro.css"

import Api from './Api'

export default function Quadro() {


    return (
        <>
            <div className="painel">
                <div className="retangulo">
                    <div className="cartaz">
                        <h1>Ola</h1>
                    </div>
                    <br></br>

                    <h3>Filme:</h3>
                    <h3>Descrição:</h3>
                    <h3>Preço:</h3>
<br>
</br>
                    <button type="button">Ver filmes</button>
    
                    <Api />
    
    
                </div>
            </div>
            <br>
            </br>
        </>
    )
}