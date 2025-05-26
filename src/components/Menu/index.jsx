import './styles.css'
import Cadastro from '../../pages/Cadastro'
export const Menu = () => { 
    return ( 
        <div className="menu-principal">
            <img className= 'mclaren' src="https://www.pngmart.com/files/23/Mclaren-Logo-PNG-Photo.png" alt="McLaren" />
            <ul> 
                <li><a href="../../pages/Home/index.jsx">Home</a></li> 
                <li><a href="../../pages/Cadastro/index.jsx">Cadastro</a></li> 
                <li><a href="../../pages/Reservas/index.jsx">Reservas</a></li> 
                <li><a href="../../pages/Contato/index.jsx">Contato</a></li> 
            </ul> 
        </div>
    )
}