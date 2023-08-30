import React, { useEffect, useState } from "react";
import Modal from "./Modal";
const url = "http://localhost:8080/solarsystem/Milky Way";

const Sun = ({ onClick }) => {
  const [users, setUsers] = useState([]); //planet info

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    // getStar(users.star)
    setUsers(users.star);
    // setStar(users.star);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      {[users].map((user) => {
        const { name, nickname, img } = user;
        return (
          <div key={name} className="planet" onClick={onClick}>
            <img src={img} alt={name} />
            <div key={name} className="footer">
              <h2>{name}</h2>
              <h4>{nickname}</h4>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Sun;
