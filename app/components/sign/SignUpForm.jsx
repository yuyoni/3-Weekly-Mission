import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import eyeOnIcon from "../../../public/assets/eye-on.svg";
import eyeOffIcon from "../../../public/assets/eye-off.svg";

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordCheck, setShowPasswordCheck] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  // 유효성 검사
  const emailRegex = /\S+@\S+\.\S+/;
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  const onSubmit = (data) => {
    // 회원가입 폼 제출 시 실행할 함수
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <InputContainer>
          <InputLabel>이메일</InputLabel>
          <InputForm
            id="email"
            placeholder="email@example.com"
            className={errors.email ? "invalid-border" : ""}
            type="text"
            {...register("email", {
              required: "이메일을 입력해 주세요.",
              pattern: {
                value: emailRegex,
                message: "올바른 이메일 주소가 아닙니다.",
              },
            })}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </InputContainer>
        <InputContainer>
          <InputLabel>비밀번호</InputLabel>
          <InputFormContainer>
            <InputForm
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="영문, 숫자를 조합해 8자 이상으로 입력해 주세요."
              className={errors.password ? "invalid-border" : ""}
              {...register("password", {
                required: "비밀번호를 입력해 주세요",
                pattern: {
                  value: passwordRegex,
                  message: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
                },
              })}
            />
            <EyeIcon
              src={showPassword ? eyeOffIcon : eyeOnIcon}
              alt="eye-icon"
              width={16}
              height={16}
              style={{ cursor: "pointer" }}
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            />
          </InputFormContainer>
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </InputContainer>
        <InputContainer>
          <InputLabel>비밀번호 확인</InputLabel>
          <InputFormContainer>
            <InputForm
              id="passwordCheck"
              type={showPasswordCheck ? "text" : "password"}
              placeholder="영문, 숫자를 조합해 8자 이상으로 입력해 주세요."
              className={errors.password ? "invalid-border" : ""}
              {...register("passwordCheck", {
                required: "비밀번호를 입력해 주세요",
                pattern: {
                  value: passwordRegex,
                  message: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
                },
              })}
            />
            <EyeIcon
              src={showPasswordCheck ? eyeOffIcon : eyeOnIcon}
              alt="eye-icon"
              width={16}
              height={16}
              style={{ cursor: "pointer" }}
              onClick={() => {
                setShowPasswordCheck(!showPasswordCheck);
              }}
            />
          </InputFormContainer>
          {errors.passwordCheck && (
            <ErrorMessage>{errors.passwordCheck.message}</ErrorMessage>
          )}
        </InputContainer>
        <Button type="submit">회원가입</Button>
      </Container>
    </form>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const InputLabel = styled.label``;

const InputForm = styled.input`
  display: flex;
  width: 400px;
  padding: 18px 15px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid var(--Linkbrary-gray20, #ccd5e3);
  background: var(--Linkbrary-white, #fff);

  :focus {
    outline: none;
    border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
  }

  .invalid-border {
    border: 1px solid red;
  }
`;

const InputFormContainer = styled.div`
  position: relative;
`;

const Button = styled.button`
  display: flex;
  width: 400px;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: white;
  border-radius: 8px;
  background: var(
    --gra-purpleblue-to-skyblue,
    linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
  );
`;

const EyeIcon = styled(Image)`
  position: absolute;
  bottom: 18px;
  right: 15px;
`;

const ErrorMessage = styled.span`
  color: #ff5b56;
  position: relative;
  top: -6px;
`;
