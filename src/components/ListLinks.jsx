function ListLinks(props) {
    return ( 
        <ol className="list-unslysted">
            {
                props.links.map ((item)=>{
                    return (
                        <li>
                            <a href={item.url}>{item.name}</a>
                        </li>
                    )
                })
            }
        </ol>
     );
}

export default ListLinks;