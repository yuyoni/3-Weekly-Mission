import "../css/Cards.css";
import Card from "./Card";

function Cards({ folderData }) {
  return (
    <div className="cards">
      {folderData?.links.map((link) => {
        return <Card key={link.id} link={link} />;
      })}
    </div>
  );
}

export default Cards;
