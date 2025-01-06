import { Component } from "react";
import App from "./App"
import propsType from 'prop-types'
function Dog({value1,value2}){
    return(
        <div>
        <h1>The sum of {value1} and {value2} is {value1+value2}</h1>
        </div>
    )
}
export default Dog