import "./Cards.css";

function Card({ link }) {
  return (
    <div className="card">
      <div className="link-img-box">
        <img className="link-img" src={link.imageSource} alt={link.title} />
      </div>
      <div className="detail-box">
        <span>10 minutes ago</span>
        <p className="description">{link.description}</p>
        <span>{link.createdAt}</span>
      </div>
    </div>
  );
}

function Cards({ folderData }) {
  return (
    <div className="cards">
      {folderData
        ? folderData.folder.links.map((link) => {
            return <Card key={link.id} link={link} />;
          })
        : ""}
    </div>
  );
}

export default Cards;
