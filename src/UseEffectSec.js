import React, { useEffect, useState } from "react";

const url = "http://localhost:8080/solarsystem/Milky Way";

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
        const { name, nickname, img } = user;
        return (
          <div key={name} className="planet">
            <img src={img} alt={name} />
            <div className="footer">
              <h2>{name}</h2>
              <h4>{nickname}</h4>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default UseEffectSec