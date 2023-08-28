import React, { useEffect, useState } from "react";
import "./Modal.css";
const url = "http://localhost:8080/solarsystem/Milky Way";

const FastFacts = (props) => {
  const [users, setUsers] = useState([]);
  const [distance, setDistance] = useState([]);
  const [radius, setRadius] = useState([]);

  const getUsers = async () => {
    const response = await fetch(`${url}/${props.props}`);
    const users = await response.json();
    setUsers(users);
    setDistance(users.distance_from_the_sun);
    setRadius(users.radius);
    // console.log(distance, radius);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const [modal, setModal] = useState(false);

  if (modal) {
    document.body.classList.add("active-modl");
  } else {
    document.body.classList.remove("active-modl");
  }

  return (
    <>
      {[distance].map((user) => {

      return (
        <>
          <h2>{users.nickname}</h2>
          <h3>Fast Facts</h3>
          <div className="my-text">
            <ol>
              <b>
                <li>Moons: {users.moons}</li>
                <li>Rings: {users.rings}</li>
                <li>One Year: {users.year} Earth Days</li>
                <li>
                  Distance From The Sun:
                  <ul>
                    <li>{user.miles}</li>
                    <li>{user.km}</li>
                  </ul>
                </li>
                <li>
                  Radius:
                  <ul>
                    <li>{radius.miles}</li>
                    <li>{radius.km}</li>
                  </ul>
                </li>
                <li>Type: {users.type}</li>
              </b>
            </ol>
          </div>
        </>
      );
      })}
    </>
  );
};

export default FastFacts;
