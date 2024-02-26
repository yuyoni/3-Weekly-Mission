"use client";
import styled from "styled-components";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <h1>home</h1>
      <Button href={"/shared"}>shared</Button>
      <Button href={"/folder"}>folder</Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

const Button = styled(Link)`
  width: 100px;
  display: block;
  border-radius: 20px;
  border: 1px solid #fff;
  background: #6d6afe;
  color: #fff;
  text-align: center;
  text-decoration: none;
`;
