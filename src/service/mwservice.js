import axios from 'axios'
import { useState, useEffect } from "react";
import React from "react";
import ReactDOM from 'react-dom/client';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
// import styled from 'styled-components';
import App from '../App';

// const url = "http://localhost:8080solarsystem/{solarsystem}/{galaxy}";

// function mwservice() {
//     // const planet = useState([]);
//     const loadPlanets=async()=>{
//         const result = await axios.get('http://localhost:8080/solarsystem/solarsystem/Milky Way');
//         return "Maria";
//     }
//     return(
//         <h1>
//             this is the new me !!!{loadPlanets.name} Love me
//         </h1>
//     );
// }

// export default mwservice;


// export default function Mwservice() {
//     // const planet = useState([]);
//     // useEffect(() => {
//     //     loadPlanets();
//     // }, []);

//     // let planet = "";
//     // const loadPlanets=async()=>{
//     //     // const result = await axios.get('http://localhost:8080/solarsystem/solarsystem/Milky Way');
//     //     // planet = result.data.solarsystem[1];
//     //     // console.log(result.data.starsystem[1]);
//     //     return "Maria";
//     // }

//     const hello = () => "Hello World";
//     return(
//         <h1>did this work {hello}</h1>
//     )
// }

function Mwservice() {

    // const planet = useState([]);
    // useEffect(() => {
    //     loadPlanets();
    // });

    const [count, setCount] = useState([]);
    useEffect(() => {
        // console.log("Code with Ifeoma");
        loadPlanets();
    }, []);

    const loadPlanets=async()=>{
        const result = await axios.get('http://localhost:8080/solarsystem/solarsystem/Milky Way');
        let planet = result.data.star.star;
        // console.log(result.data.starsystem[1]);
        console.log(planet);

        // let count = React.createElement("p");
        // var elements = [];

        const container = document.getElementById('sandy');
        const root = ReactDOM.createRoot(container);
        root.render(<p>Hallo {planet}</p>);
        // elements.push(React.createElement("div", "this"));

        // let mainContainer = React.createElement("div", { className: "${count}"}, elements);
        // const mine = await this.loadPlanets();

        // try {
        //     const result = await loadPlanets();
        // } catch (errorReason) {
        //     console.log("An error occured");
        // }
        // return (
        //     React.createElement("h1", "Ifeoma")
        // );
        // const rootElement = document.getElementById('root1');
        // const root1 = createRoot(rootElement);

        // root1.render(
        //     count
        // );
    }

    

    const hello = () => "Hello World";
    const me = () => "Hello World";
    
    return (
        <div>
            <h1>This is the new me</h1>
            <h1>This is another test</h1>
        </div>
        
    );
    
} 

export default Mwservice;