import React from "react";

export default class Examen01b extends React.Component {
    render() {
        return (
            <div className="container" style={{ background: "#ec0" }}>
                <br />
                <h5 style={{ textAlign:"right"}}>Examen-01 (Componente B [mapeo])</h5>
                <hr />
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Foto</th>
                            <th scope="col">matricula</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Grupo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.registros.map((data) => {
                            return (
                                <tr>
                                    <th scope="row">{data.id}</th>
                                    <td><img src={data.foto} width="30px" height="30px"/></td>
                                    <td>{data.matricula}</td>
                                    <td>{data.nombre}</td>
                                    <td>{data.fn}</td>
                                    <td>{data.grupo}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <br /><br />
            </div>
        );
    }
}