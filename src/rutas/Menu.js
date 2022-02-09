import React from "react";
import reactDom from "react-dom";
import { Link } from "react-router-dom";

export default class Menu extends React.Component{
    render(){
        return<div>
            <ul>
                <li><Link to="/">Index</Link></li>
            </ul>
        </div>
    }
}