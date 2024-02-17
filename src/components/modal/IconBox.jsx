import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { FacebookShareButton } from "react-share";
import styled from "styled-components";
import facebook from "../../assets/modal/Facebook.svg";
import kakao from "../../assets/modal/Kakao.svg";
import link from "../../assets/modal/link.svg";
import shareKakao from "../../utils/shareKakaoLink";

export default function IconBox({ userId, folderId, folderName }) {
  const [host, setHost] = useState("");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  useEffect(() => {
    const currentHost = window.location.origin;
    setHost(currentHost);
  }, []);

  // 아직 shared 경로에서 userId와 folderId에 따라 다른 화면을 보여주고 있지 않아서 sample folder(즐겨찾기)화면만 뜸
  const route = host + `/shared?user=${userId}&folder=${folderId}`;

  return (
    <Container>
      <IconWrapper
        color="#FEE500"
        onClick={() => shareKakao(route, folderName)}
      >
        <img src={kakao} alt="kakao-icon" />
      </IconWrapper>
      <FacebookShareButton url={route}>
        <IconWrapper color="#1877F2">
          <img src={facebook} alt="facebook-icon" />
        </IconWrapper>
      </FacebookShareButton>
      <CopyToClipboard
        text={route}
        onCopy={() => alert("클립보드에 복사되었습니다.")}
      >
        <IconWrapper color="rgba(157, 157, 157, 0.04)">
          <img src={link} alt="link-icon" />
        </IconWrapper>
      </CopyToClipboard>
      <p>카카오톡</p>
      <p>페이스북</p>
      <p>링크복사</p>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template: "1fr 1fr 1fr" "1fr 1fr 1fr";
  column-gap: 32px;
  row-gap: 10px;
  justify-content: center;
  align-items: center;

  p {
    color: #373740;
  }
`;

const IconWrapper = styled.div`
  position: relative;
  width: 42px;
  height: 42px;
  background-color: ${({ color }) => color};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    position: absolute;
    top: 12px;
    left: 12px;
  }
`;
