
import PropTypes from 'prop-types';
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
List.propTypes ={
    route : PropTypes.object.isRequired  
}

export default List;