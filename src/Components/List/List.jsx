

const List = ({route}) => {
    const {name,path}= route;
    return (
        <div>
            <ul> 
                <li className="mr-5"><a href={path}>{name}</a></li>
            </ul>
            
        </div>
    );
};

export default List;