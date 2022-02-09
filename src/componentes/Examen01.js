import React from "react";
import Menu from "../rutas/Menu"
import Examen01a from "../componentes/Examen01a"

export default class Examen01 extends React.Component{
    render(){
        return <div className='container' style={{background:"#000"}}>
            <Menu/>
            <br/>
            <h2 style={{color:"#FFF"}}>
                Examen-01 ({new Date().getFullYear()+'/'+(new Date().getMonth()+1)+'/'+new Date().getDate()+' - '+new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds()})
            </h2>
            <hr/>
            <Examen01a/>
        </div>
    }
}