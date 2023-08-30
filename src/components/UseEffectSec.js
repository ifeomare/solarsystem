import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import "./UseEffectSec.css";
import Sun from "./Sun.js";
const url = "http://localhost:8080/solarsystem/Milky Way";

const UseEffectSec = () => {
  const [users, setUsers] = useState([]); //planet info
  const [modal, setModal] = useState(false); //triggers pop-up window
  const [planet, setPlanet] = useState(""); //onclick - returns planet name

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users.starsystem);
  };

  const getPlanet = (props) => {
    setPlanet(props);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      {users.map((user) => {
        const { name, nickname, img } = user;
        return (
          <div
            key={name}
            className="planet"
            onClick={() => {
              setModal(true);
              getPlanet(name);
            }}
          >
            <img src={img} alt={name} />
            <div className="footer">
              <h2>{name}</h2>
              <h4>{nickname}</h4>
            </div>
          </div>
        );
      })}
      <Sun
        onClick={() => {
          setModal(true);
          getPlanet("Sun");
        }}
      />
      {modal && <Modal closeModal={setModal} planet={planet} />}
    </>
  );
};

export default UseEffectSec;
