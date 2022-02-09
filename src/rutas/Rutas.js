import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Examen01 from '../componentes/Examen01'

export default class Rutas extends React.Component {
    render(){
        return(<div>
            <BrowserRouter>
            <Routes>
                <Route extract path="/" element={<Examen01/>}/>
            </Routes>
            </BrowserRouter>
        </div>)
    }
}