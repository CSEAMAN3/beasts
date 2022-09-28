import { useState } from "react";

function Beast({ title, imageUrl, description, changeModal, beastObject }) {
  const [votes, setVotes] = useState(0);
  // const [name, mutation function] = useState(iniitial value)

  function voteBeast() {
    setVotes(votes + 1);
  }

  return (
    <div className="beast-container">
      <h2 className="beast-heading">{title}</h2>
      <img
        className="beast-img"
        src={imageUrl}
        alt={title}
        title={title}
        onClick={() => {
          voteBeast();
          changeModal(beastObject);
        }}
      />
      <p className="beast-content">{description}</p>
      <p className="beast-vote">❤️{votes}</p>
    </div>
  );
}

export default Beast;
