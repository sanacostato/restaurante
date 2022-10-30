function ListLinks(props) {
    return ( 
        <ul className="list-unslysted">
           
            {
                props.links.map((item)=>{
                    return (
                        
                        <li key={item.id}>
                            <a className="text-light" href={item.url}>{item.name}</a>
                        </li>
                    )
                })
            }
        </ul>
     );
}

export default ListLinks;