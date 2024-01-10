import styled from "styled-components";
import noImage from "../../assets/no-image.svg";
import formatDateAndDifference from "../../utils/FormatDate";

export default function Card({ link }) {
  const handleClick = () => {
    window.location.href = link.url;
  };

  const { formattedDate, elapsedTime } = formatDateAndDifference(
    link.createdAt
  );

  return (
    <Wrapper className="card" onClick={handleClick}>
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
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 340px;
  box-sizing: border-box;
  border-radius: 15px;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);
  cursor: pointer;

  .card:hover .detail-box {
    background-color: #f0f6ff;
  }

  .link-img-box {
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
    flex-shrink: 0;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
  }

  .link-img {
    max-width: 120%;
    max-height: 100%;
  }

  .card:hover .link-img {
    transition: all 0.3s;
    transform: scale(1.3);
  }

  .detail-box {
    display: flex;
    flex-direction: column;
    padding: 15px 20px;
    gap: 10px;
    background-color: #fff;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }

  .description {
    margin: 0;
    font-size: 16px;
    height: 40px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .elapsed-time {
    color: #666;
    font-size: 13px;
  }

  .formatted-data {
    color: #333;
    font-size: 14px;
  }
`;
