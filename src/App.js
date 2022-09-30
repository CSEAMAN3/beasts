import "./reset.css";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Modal from "./components/Modal";
import beastJson from "./data.json";
import { useState } from "react";

function App() {
  const [modalShow, setModalShow] = useState(false);
  const [activeBeast, setActiveBeast] = useState({});
  const [beastData, setBeastData] = useState(beastJson);

  const changeModal = (beast) => {
    setModalShow(!modalShow);
    setActiveBeast(beast);
  };

  const handleFilter = (event) => {
    const numHorns = parseInt(event.target.value);
    const myFilteredBeasts = beastJson.filter((beast) => beast.horns === numHorns);

    event.target.value === "" ? setBeastData(beastJson) : setBeastData(myFilteredBeasts);

    // Show all beasts some sort of if statements 2 lines.
  };

  return (
    <div className="App">
      <Header handleFilter={handleFilter} />
      <Main beastData={beastData} changeModal={changeModal} />
      <Footer />
      {modalShow && <Modal changeModal={changeModal} activeBeast={activeBeast} />}
    </div>
  );
}

export default App;
