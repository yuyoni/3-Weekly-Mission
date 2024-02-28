// Input.js
import React from "react";
import styled from "styled-components";

export default function Input({
  id,
  type,
  placeholder,
  className,
  register,
  errors,
}) {
  return (
    <>
      <InputForm
        id={id}
        type={type}
        placeholder={placeholder}
        className={className}
        {...register}
      />
      {errors && <ErrorMessage>{errors.message}</ErrorMessage>}
    </>
  );
}

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
    border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
  }
`;

const ErrorMessage = styled.span`
  color: #ff5b56;
  position: relative;
  top: -6px;
`;
