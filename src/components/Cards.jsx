import "../css/Cards.css";
import Card from "./Card";

function Cards({ folderData }) {
  return (
    <div className="cards">
      {folderData && folderData.links
        ? folderData.links.map((link) => <Card key={link.id} link={link} />)
        : "저장된 링크가 없습니다"}
    </div>
  );
}

export default Cards;
