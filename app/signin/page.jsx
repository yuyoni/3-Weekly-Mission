"use client";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import google from "../../public/assets/google.svg";
import kakao from "../../public/assets/kakao.svg";
import logo from "../../public/assets/logo.svg";
import AuthForm from "../components/sign/AuthForm";

export default function SignIn() {
  return (
    <Wrapper>
      <Container>
        <Link href="/">
          <Image src={logo} alt="logo" width={212} height={38} />
        </Link>
        <LinkContainer>
          <p>회원이 아니신가요?</p>
          <SignUpLink href="/signup">회원가입하기</SignUpLink>
        </LinkContainer>
        <AuthForm isSignUp={false} />
        <SocialLogin>
          <span>소셜 로그인</span>
          <div style={{ display: "flex", gap: "16px" }}>
            <Link href="https://www.google.com/" title="Google로 로그인">
              <Image src={google} alt="Google 로고" />
            </Link>
            <Link href="https://www.kakaocorp.com/page/" title="Kakao로 로그인">
              <Image src={kakao} alt="Kakao 로고" />
            </Link>
          </div>
        </SocialLogin>
      </Container>
    </Wrapper>
  );
}

const SocialLogin = styled.div`
  display: flex;
  width: 400px;
  padding: 12px 24px;
  justify-content: space-between;
  align-items: center;

  border-radius: 8px;
  border: 1px solid var(--Linkbrary-gray20, #ccd5e3);
  background: var(--Linkbrary-gray10, #e7effb);
`;

const Wrapper = styled.div`
  background-color: #f0f6ff;
  width: 1440px;
  height: 982px;
  padding-top: 238px;
  padding-bottom: 117px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
`;

const LinkContainer = styled.div`
  display: flex;
`;

const SignUpLink = styled(Link)`
  color: var(--Linkbrary-primary-color, #6d6afe);
  text-decoration: underline;
  font-weight: 600;
`;
