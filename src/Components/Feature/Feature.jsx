import { IoMdCheckmark } from "react-icons/io";
import PropTypes from 'prop-types';
const Feature = ({feature}) => {
    return (
        <div>
            <div>

                <h2 className="text-2xl flex items-center"><IoMdCheckmark className="text-gray-500"></IoMdCheckmark>{feature}</h2>

            </div>
            
        </div>
    );
};
Feature.propTypes ={
    feature : PropTypes.string
}

export default Feature;
