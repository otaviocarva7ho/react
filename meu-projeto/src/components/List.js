import Item from "./Item"

function List(params) {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca = "Ferrari" />
                <Item marca = "Porche" />
                <Item marca = "Nissan" />
            </ul>
        </>
    )
}

export default List