"use client";
import Image from "next/image";
import styled from "styled-components";
import facebook from "../../../public/assets/facebook.svg";
import instagram from "../../../public/assets/instagram.svg";
import twitter from "../../../public/assets/twitter.svg";
import youtube from "../../../public/assets/youtube.svg";

export default function Footer() {
  return (
    <Wrapper>
      <Container>
        <span className="copyright">©codeit - 2023</span>
        <div className="link-box">
          <a className="privacy" href="/privacy">
            Privacy Policy
          </a>
          <a className="faq" href="/faq">
            FAQ
          </a>
        </div>
        <div className="sns-logo-box">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={facebook} alt="facebook" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={twitter} alt="twitter" />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={youtube} alt="youtube" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={instagram} alt="instagram" />
          </a>
        </div>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  background-color: #111322;
`;

const Container = styled.div`
  display: grid;
  justify-content: space-between;
  padding: 32px 104px 64px;
  grid-template-areas: "copyright link-box sns-logo-box";
  width: 100%;

  @media (max-width: 767px) {
    grid-template-columns: auto;
    grid-template-areas: "link-box sns-logo-box" "copyright .";
    row-gap: 60px;
    padding: 32px;
  }

  .copyright {
    grid-area: copyright;
    color: #676767;
  }

  .privacy,
  .faq {
    color: #676767;
    text-decoration: none;
  }

  .link-box {
    grid-area: link-box;
    display: flex;
    gap: 30px;
  }

  .sns-logo-box {
    grid-area: sns-logo-box;
    display: flex;
    gap: 12px;
  }
`;
