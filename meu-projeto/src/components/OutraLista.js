function OutraLista({itens}) {
    return (
        <>
            <h3>Lista de coisas Boas</h3>
            {
                itens.length > 0 ? (
                    itens.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))
                ) : (
                    <p>Não a itens na Lista!</p>
                )
            }
        </>
    )
}

export default OutraLista