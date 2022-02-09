import React from "react";

export default class Clase4 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            foto:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/300px-Imagen_no_disponible.svg.png',
            nombre: '---------',
            matricula: '000000',
            fn: '0000/00/00',
            grupo: '----------',
        }
    }


    componentDidMount() {
        setTimeout(() => {
            this.setState({
                foto:this.props.foto,
                nombre: this.props.nombre,
                matricula: this.props.matricula,
                fn: this.props.fn,
                grupo: this.props.grupo,
            })
        }, 5000)
    }

    render() {
        const {foto,nombre, matricula, fn, grupo } = this.state
        var partes = fn.split('/');
        var res = 2022 -partes[0];
        return (

            <div className="container" style={{ background: '#FFF' }}>
                <br />
                <h5 style={{ textAling: 'right' }}>Examen-01 (Componente C [tiempo de registro])</h5>
                <hr />
                <div className="card text-center">
                    <div className="card-header">Informacion de {nombre}</div>
                    <div className="card-body">
                        <h5 className="card-title">Registro No. (Matricula): {matricula}</h5>
                        <p className="card-text">El alumno con edad de {res}, con fecha de nacimiento {fn}, es {res >= 18 ? 'mayor de edad.':'menor de edad.'}</p>
                        <a href={foto} className="btn btn-primary" target="_blank">Ver foto</a>
                    </div>
                    <div className="card-footer text-muted">
                        {grupo}<span dangerouslySetInnerHTML={{"__html":"&copy;"}}/>UTVT
                    </div>
                </div>
            </div>
        )
    }
}