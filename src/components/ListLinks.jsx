function ListLinks(props) {
    return ( 
        <ul className="list-unslysted">
            {
                props.links.map ((item)=>{
                    return (
                        <li>
                            <a href={item.url}>{item.name}</a>
                        </li>
                    )
                })
            }
        </ul>
     );
}

export default ListLinks;