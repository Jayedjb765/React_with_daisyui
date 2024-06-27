import List from "../List/List";


const Responsivenav = () => {
    const routes = [{ id: 1, name: 'Home', path: '/' }, { id: 2, name: 'About', path: '/about' }, { id: 3, name: 'Services', path: '/services' }, { id: 4, name: 'Contact', path: '/contact' }, { id: 5, name: 'Blog', path: '/blog' }];

    return (
        <div className="md:flex">
            {
                routes.map(route => <List key={route.id} route={route}></List>)
            }
            
        </div>
    );
};

export default Responsivenav;