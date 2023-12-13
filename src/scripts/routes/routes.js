import Dashboard from '../views/pages/dashboard';
import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';
import About from '../views/pages/about';

const routes = {
    '/': Dashboard,
    '/favorite': Favorite,
    '/detail/:id': Detail,
    '/about': About,
};

export default routes;
