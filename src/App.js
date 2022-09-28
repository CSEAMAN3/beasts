import "./reset.css";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Modal from "./components/Modal";
import beastData from "./data.json";
import { useState } from "react";

function App() {
  const [modalShow, setModalShow] = useState(false);
  const [activeBeast, setActiveBeast] = useState({});

  const changeModal = (beast) => {
    setModalShow(!modalShow);
    setActiveBeast(beast);
  };

  return (
    <div className="App">
      <Header />
      <Main beastData={beastData} changeModal={changeModal} />
      <Footer />
      {modalShow && (
        <Modal changeModal={changeModal} activeBeast={activeBeast} />
      )}
    </div>
  );
}

export default App;
