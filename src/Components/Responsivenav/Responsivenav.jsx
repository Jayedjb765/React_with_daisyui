import { useState } from "react";
import List from "../List/List";
import { MdOutlineMenu } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";


const Responsivenav = () => {
    const [open,setopen] = useState(false);

    const routes = [{ id: 1, name: 'Home', path: '/' }, { id: 2, name: 'About', path: '/about' }, { id: 3, name: 'Services', path: '/services' }, { id: 4, name: 'Contact', path: '/contact' }, { id: 5, name: 'Blog', path: '/blog' }];

    return (
        <div className="md:flex">
            <div className="md:hidden" onClick={()=>setopen(!open)}
                 >
                    {
                    open === true ? 
                    <RxCross1></RxCross1>
                    :<MdOutlineMenu></MdOutlineMenu>
    
                   }
               
              
            </div>
            {
                routes.map(route => <List key={route.id} route={route}></List>)
            }
            
        </div>
    );
};

export default Responsivenav;