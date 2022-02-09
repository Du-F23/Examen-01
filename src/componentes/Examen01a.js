import React from "react";
import Examen01b from "./Examen01b";
import Examen01c from "./Examen01c";
import img1 from '../img/1.png';
import img2 from '../img/2.png';
import img3 from '../img/3.png';
import img4 from '../img/4.png';

var registros = [
    {
        id: '01',
        matricula: '222010043',
        foto: img1,
        nombre: "Fernando",
        fn: '1993/04/14',
        grupo: 'DSM-53',
    },
    {
        id: '02',
        matricula: '222010053',
        foto: img2,
        nombre: "Juan",
        fn: '1983/05/04',
        grupo: 'DSM-53',
    },
    {
        id: '03',
        matricula: '222010063',
        foto: img3,
        nombre: "Pedro",
        fn: '2002/02/14',
        grupo: 'DSM-53',
    },
    {
        id: '04',
        matricula: '222010073',
        foto: img4,
        nombre: "Ernesto",
        fn: '2001/12/04',
        grupo: 'DSM-53',
    }   
];

var datos=registros[0];

export default class Examen01 extends React.Component{
    render(){
        return <div className="container" style={{background:"#888"}}>
            <br/>
            <h5>Examen-01 (Componente A[Componentes X2 & Data de B y C])</h5>
            <hr/>
            <Examen01b registros={registros}/>
            <br/>
            <Examen01c nombre={datos.nombre} foto={datos.foto} fn={datos.fn} grupo={datos.grupo} matricula={datos.matricula}/>
            <br/><br/>
            <br/><br/>
        </div>
    }
}
