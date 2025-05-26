import './styles.css'

function Cadastro() {
    return (
        <div>
            <Menu/>
            <h1>Formulário de Contato</h1>
            <div className="container">
                <form>
                    <label for="nome">Nome de Usuário:</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        placeholder="Ex: Yasmin28"
                        required
                    />

                    <label for="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Ex: blablabla123@gmail.com"
                        required
                    />

                    <label for="password">Senha:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Digite sua senha:"
                        required
                    ></input>

                    <label for="password">Confirmar Senha:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Confirme sua senha:"
                        required
                    ></input>

                    <div className="button">
                        <button type="submit">Criar Conta</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Cadastro
