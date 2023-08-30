import React, { useEffect, useState } from "react";
const url = "http://localhost:8080/solarsystem/Milky Way";

const FunFacts = () => {
  const [info, setInfo] = useState([]); //planet info

  const getInfo = async () => {
    const response = await fetch(url);
    const info = await response.json();
    setInfo(info.starsystem);
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <section className="facts">
      {info.map((info1, i) => {
        console.log(i);
        const { id, name, fact, img } = info1;
        return (
          <div className="mine">
            <div className="image">
              <img
                src={img}
                alt={name}
              />
            </div>
            <div className="text">
              <div className="header">
                <h2>{name}</h2>
                <h5>{id}</h5>
              </div>

              <p>{fact}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default FunFacts;
