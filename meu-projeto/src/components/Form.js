function Form(params) {
    
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log("Cadastrou o usuário!")
    }

    return (
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit = {cadastrarUsuario}>
                <div>
                    <input type="text" name="" id="" placeholder = "Digite o seu nome" />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )

}

export default Form