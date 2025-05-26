import './styles.css'

function Cards(){
    return(
        <div className="cards">
            <div className="card">
                <h3>MP4-27</h3>
                <img className='carphoto' src="https://cdn-6.motorsport.com/images/mgl/25wRg4x6/s1000/f1-brazilian-gp-2012-lewis-hamilton-mclaren-mp4-27.webp" alt="mp4-27" />
                <p>Vitórias: 7</p>
                <p>Pista: Autódromo José Carlos Pace</p>
                <p>Pilotos: Lewis Hamilton</p>
                <p>Evento: GP do Brasil</p>
            </div>
            <div className="card">
                <h3>MP4/5B</h3>
                    <img className='carphoto' src="https://cdn-5.motorsport.com/images/mgl/0kPPyPl2/s1000/f1-united-states-gp-1990-ayrton-senna-mclaren-mp4-5b-honda.webp" alt="mp4-27" />
                    <p>Vitórias: 6</p>
                    <p>Pista: GP de Phoenix</p>
                    <p>Pilotos: Ayrton Senna</p>
                    <p>Evento: GP dos Estados Unidos</p>
            </div>
            <div className="card">
                <h3>M7C Ford</h3>
                    <img className='carphoto' src="https://cdn-5.motorsport.com/images/mgl/0kPPyPl2/s1000/f1-united-states-gp-1990-ayrton-senna-mclaren-mp4-5b-honda.webp" alt="mp4-27" />
                    <p>Pista: Circuito de Charade</p>
                    <p>Pilotos: Bruce McLaren</p>
                    <p>Evento:GP da França</p>
            </div>
            <div className="card">
                <h3>MCL39</h3>
                    <img className='carphoto' src="https://cdn-5.motorsport.com/images/mgl/0kPPyPl2/s1000/f1-united-states-gp-1990-ayrton-senna-mclaren-mp4-5b-honda.webp" alt="mp4-27" />
                    <p>Pista: Circuito de Silverstone</p>
                    <p>Pilotos: Lando Norris</p>
                    <p>Evento: GP da Espanha</p>
            </div>
        </div>
    )
}
export default Cards