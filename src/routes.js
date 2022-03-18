import { Routes as ReactRoutes, Route } from "react-router-dom";
import NotFound from "pages/404";
import { useEffect } from "react";
import { useLocation } from "react-router";
import Home from './page/home';
import About from './page/about';
import MyPokemon from './page/myPokemont';
import DetailPokemon from './page/home/detail';

const Routes = () => {
    const location = useLocation();
    useEffect(() => {
        if (location.pathname !== "/") {
            window.scroll(0, 0);
        }
    }, [location]);

    return (
        <ReactRoutes>
            <Route path="/detailpokemon" element={<DetailPokemon />} />
            <Route path="/mypokemon" element={<MyPokemon />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
        </ReactRoutes>
    );
};

export default Routes;
