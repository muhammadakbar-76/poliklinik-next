import React from "react";

interface Iloading {
    states: {
        [name: string]: any
    }
    setStatus: (a: any, b: string) => void
}

export const awal: Iloading = {
    states: {
        loading: false
    },
    setStatus: function(){}
}

const Appcontext = React.createContext<Iloading>(awal);

export default Appcontext;