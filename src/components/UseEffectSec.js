import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import "./Modal.css";
const url = "http://localhost:8080/solarsystem/Milky Way";

const UseEffectSec = () => {
  const [users, setUsers] = useState([]);
  const [modal, setModal] = useState(false);
  
  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users.starsystem);
    // console.log(users);
  };
  
  const toggleModal = () => {
    setModal(!modal);
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
          <div key={name} className="planet" onClick={() => setModal(true)}>
            <img src={img} alt={name} />
            <div className="footer">
              <h2>{name}</h2>
              <h4>{nickname}</h4>
            </div>
          </div>
        );
      })}
      {modal && <Modal closeModal={ setModal } />}
    </>
  );
};

export default UseEffectSec;
