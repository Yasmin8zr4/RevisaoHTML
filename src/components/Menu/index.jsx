import './styles.css'
export const Menu = () => { 
    return ( 
        <div className="menu-principal">
            <h1>Menu</h1> 
            <ul> 
                <li><a href="../../pages/Home/index.jsx">Home</a></li> 
                <li><a href="../../pages/Cadastro/index.jsx">Cadastro</a></li> 
                <li><a href="../../pages/Reservas/index.jsx">Reservas</a></li> 
                <li><a href="../../pages/Contato/index.jsx">Contato</a></li> 
            </ul> 
        </div>
    )
}