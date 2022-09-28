import "./Main.css";
import Beast from "./Beast";

export default function Main({ beastData, changeModal }) {
  return (
    <main>
      <div className="main-container">
        {beastData.map(function (beastObject) {
          return (
            <Beast
              beastObject={beastObject}
              title={beastObject.title}
              imageUrl={beastObject.image_url}
              description={beastObject.description}
              changeModal={changeModal}
            />
          );
        })}
      </div>
    </main>
  );
}
