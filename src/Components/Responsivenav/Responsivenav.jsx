import { useState } from "react";
import List from "../List/List";
import { MdOutlineMenu } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";


const Responsivenav = () => {
    const [open,setopen] = useState(false);

    const routes = [{ id: 1, name: 'Home', path: '/' }, { id: 2, name: 'About', path: '/about' }, { id: 3, name: 'Services', path: '/services' }, { id: 4, name: 'Contact', path: '/contact' }, { id: 5, name: 'Blog', path: '/blog' }];

    return (
        <div className="">
            <nav className="text-black md:hidden pt-5 text-2xl bg-yellow-200" onClick={()=>setopen(!open)}
                 >
                    {
                    open === true ? 
                    <RxCross1></RxCross1>
                    :<MdOutlineMenu></MdOutlineMenu>
    
                   }
               
              
            </nav>
            <ul className={`bg-yellow-200 duration-1000 absolute md:static md:flex px-6 shadow
                ${open ? 'top-20' : '-top-60'  }
                `}>
            {
                routes.map(route => <List key={route.id} route={route}></List>)
            }

            </ul>
            
            
        </div>
    );
};

export default Responsivenav;