import noImage from "../assets/no-image.svg";
import formatDateAndDifference from "../utils/FormatDate";
import "../css/Cards.css";

function Card({ link }) {
  const handleClick = () => {
    window.location.href = link.url;
  };

  const { formattedDate, elapsedTime } = formatDateAndDifference(
    link.createdAt
  );

  return (
    <div className="card" onClick={handleClick}>
      <div className="link-img-box">
        <img
          className="link-img"
          src={link.imageSource || noImage}
          alt={link.title}
        />
      </div>
      <div className="detail-box">
        <span className="elapsed-time">{elapsedTime}</span>
        <p className="description">{link.description}</p>
        <span className="formatted-data">
          {formattedDate.replace(/-/g, ". ")}
        </span>
      </div>
    </div>
  );
}

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
