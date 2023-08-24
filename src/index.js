import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import "./index.css";

import mercury from "./assets/images/venus.png";
// import {venus} from './images/venus.png'
// import {earth} from './images/earth.png'
// import {mars} from './images/mars.png'
// import {jupiter} from './images/jupiter.png'
// import {saturn} from './images/saturn.png'
// import {uranus} from './images/uranus.png'
// import { neptune } from './images/neptune.png'

const url = "http://localhost:8080/solarsystem/Milky Way";
// const img = require('./images/')
// function BookList() {
//   return (
//     //these are props
//     <section className="booklist">
//       {console.log(data)}
//       {data.map((book, index) => {
//         return <SpecificBook key={book.id} {...book} />;
//       })}
//     </section>
//   );
// }

const UseEffectSec = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users.starsystem);
    console.log(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      {users.map((user) => {
        const { name, nickname } = user;
        return (
          <article key={name} className="planet">
            <img src={mercury} alt={name} title={name} />
            <h2>{name}</h2>
            <h4>{nickname}</h4>
          </article>
        );
      })}
    </>
  );
};

function PlanetList() {
  // const [name, nickname] = props;
  return (
    //these are props
    <section className="planetlist">
      <UseEffectSec />
    </section>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<PlanetList />);

