// createdAt
// :
// "2023-03-12T14:24:08Z"
// description
// :
// "월 2만원대로 Python, JavaScript, HTML/CSS 등 3,000개 이상 프로그래밍 강의를 배워보세요!"
// id
// :
// 1
// imageSource
// :
// "https://codeit-frontend.codeit.com/static/images/brand/og_tag.png"
// title
// :
// "코드잇 | 코딩, 쉬워질 때도 됐다"
// url
// :
// "https://www.codeit.kr"
import "./Cards.css";

function Card({ link }) {
  return (
    <div className="card">
      <div className="link-img-box">
        <img className="link-img" src={link.imageSource} alt={link.title} />
      </div>
      <div className="description">
        <span>10 minutes ago</span>
        <p>{link.description}</p>
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
        : "없어.."}
    </div>
  );
}

export default Cards;
