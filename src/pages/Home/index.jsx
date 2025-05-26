import { Menu } from '../../components/Menu'
import Banner from '../../components/Banner'
import Cards from '../../components/Cards'
import './styles.css'

function Home(){
    return (
        <div className='home'>
            <Menu/>
            <Banner/>
            <h1>Conheça os selecionados:</h1>
            <Cards/>
        </div>
    )
}
export default Home