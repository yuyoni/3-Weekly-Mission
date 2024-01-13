import styled from "styled-components";
import close from "../../assets/_close.svg";
import IconBox from "./IconBox";
import SelectFolder from "./SelectFolder";

export default function CommonModal({
  setter,
  title,
  subtitle = "",
  placeholder,
  buttonText,
  color,
  folderData,
  icon,
  folderId,
  userId,
}) {
  return (
    <Wrapper onClick={(e) => e.stopPropagation()}>
      <Container>
        <img
          className="exit-button"
          src={close}
          alt="x"
          onClick={(e) => {
            e.stopPropagation();
            setter(false);
          }}
        />
        <span className="title">{title}</span>
        {/* 이 부분 너무 복잡함 => if문이나 switch case로 수정하기 */}
        {placeholder ? <input type="text" placeholder={placeholder} /> : null}
        <p className="subtitle">{subtitle}</p>
        {folderData ? <SelectFolder folderData={folderData} /> : null}
        {buttonText ? (
          <Button color={color} onClick={(e) => e.stopPropagation()}>
            {buttonText}
          </Button>
        ) : null}
        {icon ? (
          <IconBox userId={userId} folderId={folderId} folderName={subtitle} />
        ) : null}
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px 40px;
  border-radius: 15px;
  border: 1px solid #ccd5e3;
  background: #fff;

  .title {
    font-weight: 600;
    font-size: 20px;
    color: #373740;
    margin-bottom: 24px;
    width: 280px;
  }

  input {
    display: flex;
    width: 100%;
    padding: 18px 15px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: 1px solid #ccd5e3;
    background: #fff;
    margin-bottom: 15px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: #9fa6b2;
  }

  .subtitle {
    margin-bottom: 15px;
  }

  .exit-button {
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 16px;
  border-radius: 8px;
  color: #f5f5f5;
  font-size: 14px;
  font-weight: 500;

  ${({ color }) =>
    color === "linear-gradient"
      ? `background-image: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);`
      : `background-color: ${color};`};
`;
