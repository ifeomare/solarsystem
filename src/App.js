import UseEffectSec from './components/UseEffectSec';
import NavBar from "./components/NavBar";
import './App.css';


function PlanetList() {
  return (
    <>
      <NavBar link1={"yes"} link2={"no"} />
      <section className="planetlist">
      <UseEffectSec />
      {/* <Modal /> */}
    </section>
    </>
    
  );
}

export default PlanetList;
