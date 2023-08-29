import React from "react";
import NavBar from "../components/NavBar";
import "./facts.css";

function Facts() {
  return (
    <>
      <NavBar />
      <article id="facts">
        <section className="facts">
          <div className="mine">
            <div className="image">
              <img
                src="https://raw.githubusercontent.com/ifeomare/solarsystem/main/src/images/mercury.png"
                alt="Mercury"
              />
            </div>
            <div className="text">
              <div className="header">
                <h2>Mercury</h2>
                <h5>Closest to the Sun</h5>
              </div>

              <p>
                Standing on Mercury's surface at its closest approach to the
                Sun, our star would appear more than three times larger than it
                does on Earth.
              </p>
            </div>
          </div>

          <div className="mine">
            <div className="image">
              <img
                src="https://raw.githubusercontent.com/ifeomare/solarsystem/main/src/images/venus.png"
                alt="Venus"
              />
            </div>
            <div className="text">
              <div className="header">
                <h2>Venus</h2>
                <h5>Second from the Sun</h5>
              </div>
              <p>
                Venus is permanently shrouded in thick, toxic clouds of sulfuric
                acid that start at an altitude of 28 to 43 miles (45 to 70
                kilometers). The clouds smell like rotten eggs!
              </p>
            </div>
          </div>
          <div className="mine">
            <div className="image">
              <img
                src="https://raw.githubusercontent.com/ifeomare/solarsystem/main/src/images/earth.png"
                alt="Earth"
              />
            </div>
            <div className="text">
              <p>
                Earth's atmosphere atmosphere protects us from incoming
                meteoroids, most of which break up in our atmosphere before they
                can strike the surface.
              </p>
            </div>
          </div>
          <div className="mine">
            <img
              src="https://raw.githubusercontent.com/ifeomare/solarsystem/main/src/images/mars.png"
              alt="Mars"
            />
            <p>
              Mars is a rocky planet. Its solid surface has been altered by
              volcanoes, impacts, winds, crustal movement and chemical
              reactions.
            </p>
          </div>
          <div className="mine">
            <img
              src="https://raw.githubusercontent.com/ifeomare/solarsystem/main/src/images/jupiter.png"
              alt="Jupiter"
            />
            <p>
              Jupiter's Great Red Spot is a gigantic storm that’s about twice
              the size of Earth and has raged for over a century.
            </p>
          </div>
          <div className="mine">
            <img
              src="https://raw.githubusercontent.com/ifeomare/solarsystem/main/src/images/saturn.png"
              alt="Saturn"
            />
            <p>
              Saturn is a gas-giant planet and therefore does not have a solid
              surface like Earth’s. But it might have a solid core somewhere in
              there.
            </p>
          </div>
          <div className="mine">
            <img
              src="https://raw.githubusercontent.com/ifeomare/solarsystem/main/src/images/uranus.png"
              alt="Uranus"
            />
            <p>
              Like Venus, Uranus rotates east to west. But Uranus is unique in
              that it rotates on its side.
            </p>
          </div>
          <div className="mine">
            <img
              src="https://raw.githubusercontent.com/ifeomare/solarsystem/main/src/images/neptune.png"
              alt="Neptune"
            />
            <p>
              Neptune is an ice giant. Most of its mass is a hot, dense fluid of
              "icy" materials – water, methane and ammonia – above a small rocky
              core.
            </p>
          </div>
        </section>
      </article>
    </>
  );
}

export default Facts;
