import { createContext, useContext, useEffect, useState } from "react";
import { createMypokemon } from "./localstorage";

export const MyPokemonContext = createContext();

export const MyPokemonProvider = (props) => {

    useEffect(() => {
        createMypokemon();
    }, []);

    return (
        <MyPokemonContext.Provider
            value={""}
            {...props}
        />
    );
}

export const useMyPokemon = () => {
    return useContext(MyPokemonContext);
};