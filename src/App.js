import UseEffectSec from './components/UseEffectSec';
import NavBar from "./components/NavBar";
import './App.css';


function PlanetList() {
  return (
    <>
      <NavBar />
      <section className="planetlist">
      <UseEffectSec />
      {/* <Modal /> */}
    </section>
    </>
    
  );
}

export default PlanetList;
