import {useState} from 'react'

function Condicional(params) {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)
    }

    function limparEmail() {
        setUserEmail('')
    }
    
    return (
        <div>
            <h2>Cadastre o seu e-mail:</h2>
            <form action="">
                <input type="email" name="" id="" placeholder='Digite o seu e-mail...' onChange={(e) => setEmail(e.target.value) } />
                <button type='submit' onClick={enviarEmail} >Enviar email</button>
            </form>
            {userEmail && (
                <div>
                    <p>o e-mail do usuário é: {userEmail}</p>
                    <button onClick={limparEmail}>Limpar e-mail</button>
                </div>
            )}
        </div>
    )

}

export default Condicional