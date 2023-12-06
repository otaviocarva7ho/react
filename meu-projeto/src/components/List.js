import Item from "./Item"

function List(params) {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca = "Ferrari" ano_lancamento = {1985} />
                <Item marca = "Porche" ano_lancamento = {1964} />
                <Item marca = "Nissan" />
                <Item marca = "Chevrolet" ano_lancamento = {1999} />
                <Item />
            </ul>
        </>
    )
}

export default List