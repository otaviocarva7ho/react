import Button from "./Button"

function Evento() {
    
    function meuEvento(params) {
        console.log(`Ativando primeiro evento!`)
    }

    function segundoEvento(params) {
        console.log('Ativando segundo evento!')
    }

    return (
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event = {meuEvento} text = "Primeiro Evento"/>
            <Button event = {segundoEvento} text = "Segundo Evento"/>
        </div>
    )
}

export default Evento