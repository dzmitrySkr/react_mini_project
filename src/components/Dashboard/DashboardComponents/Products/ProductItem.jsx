import "./Products.css"

export let ProductItem = ({item, ind}) => {

    return <tr key={item.id} className={ind % 2 === 0 ? "blue" : "white"}>
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{item.category}</td>
        <td>${item.price.toLocaleString()}</td>
        <td>{item.returnPolicy}</td>
        <td>{item.warrantyInformation}</td>
    </tr>
}