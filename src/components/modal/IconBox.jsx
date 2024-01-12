import link from "../../assets/modal/link.svg";
import facebook from "../../assets/modal/Facebook.svg";
import kakao from "../../assets/modal/Kakao.svg";
import styled from "styled-components";
import { useEffect, useState } from "react";
import shareKakao from "../../utils/shareKakaoLink";
import CopyToClipboard from "react-copy-to-clipboard";

export default function IconBox({ folderId }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  const [host, setHost] = useState("");

  useEffect(() => {
    const currentHost = window.location.origin;
    setHost(currentHost);
  }, []);

  // userId 임시로 1로 설정
  const route = host + `/shared?user=${"1"}&folder=${folderId}`;

  return (
    <Container>
      <IconWrapper
        color="#FEE500"
        onClick={() => shareKakao(route, "folderData")}
      >
        <img src={kakao} alt="kakao-icon" />
      </IconWrapper>
      <IconWrapper color="#1877F2">
        <img src={facebook} alt="facebook-icon" />
      </IconWrapper>
      <CopyToClipboard text={route} onCopy={() => alert("복사되었습니다.")}>
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

  img {
    position: absolute;
    top: 12px;
    left: 12px;
  }
`;
