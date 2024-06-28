import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const Priceoption = ({price}) => {
    const {name,features,prc} = price;
    return (
        <div  className='bg-cyan-500 p-5 flex flex-col '>
            <div className=' '>
            <div className='text-center'>
                <span className="text-7xl font-bold">{prc}</span>
                <span className="text-2xl font-semibold">/mon</span>
            </div>
            <h3 className="text-3xl text-center">{name}</h3>

            </div>
           
            <div className='flex-grow'>
                {
                    features.map((feature,idx) => <Feature key={idx} feature={feature}></Feature>)
                }
                


            </div>
            <button className='bg-green-700 w-full text-2xl rounded-lg  font-bold p-2 my-2'>Buy Now</button>
            
        </div>
    );
};


Priceoption.propTypes = {
    price : PropTypes.object.isRequired
}
export default Priceoption;