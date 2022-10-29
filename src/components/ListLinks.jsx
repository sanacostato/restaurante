function ListLinks(props) {
    return ( 
        <ul className="list-unslysted">
            {
                props.links.map((item)=>{
                    return (
                        <li key={item.id}>
                            <a href={item.url}>{item.name}</a>
                        </li>
                    )
                })
            }
        </ul>
     );
}

export default ListLinks;