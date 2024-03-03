import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import styles from "./Input.module.css";

type Props = {
  id: string;
  type: string;
  placeholder: string;
  borderError?: boolean;
  register: UseFormRegisterReturn;
  errors?: FieldError | undefined;
};

export default function Input({
  id,
  type,
  placeholder,
  borderError,
  register,
  errors,
}: Props) {
  return (
    <>
      <input
        className={`${styles.input_form} ${
          borderError ? styles.invalid_border : ""
        }`}
        id={id}
        type={type}
        placeholder={placeholder}
        {...register}
      />
      {errors && <span className={styles.error_message}>{errors.message}</span>}
    </>
  );
}
