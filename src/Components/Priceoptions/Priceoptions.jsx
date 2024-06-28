import { useEffect, useState } from "react";
import Priceoption from "../Priceoption/Priceoption";


const Priceoptions = () => {
    const [prices,setprices ] = useState([]);
    useEffect(()=>{
        fetch('gym.json')
        .then(res => res.json())
        .then(data => setprices(data))
    },[])
    return (
        <div className="mx-6">
            <h3 className="text-4xl">Best Price in Jamuna </h3>
            <div className="grid grid-cols-3 gap-6">
                {
                    prices.map(price=><Priceoption key={price.id} price={price}></Priceoption>)
                }
            </div>
            
        </div>
    );
};

export default Priceoptions;