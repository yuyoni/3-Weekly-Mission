import getData from "@apis/getData";
import postData from "@apis/postData";
import CommonModal from "@components/modal/CommonModal";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import Image from "next/image";
import { useState } from "react";
import { FolderData } from "type";
import styles from "../styles/AddLink.module.css";

type AddLinkProps = {
  userId: number | null;
};

export default function AddLink({ userId }: AddLinkProps) {
  const queryClient = useQueryClient();
  const [inputValue, setInputValue] = useState("");
  const [addLinkModal, setAddLinkModal] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddLinkClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    inputValue: string
  ) => {
    e.stopPropagation();
    if (inputValue.trim().length) {
      setAddLinkModal(true);
    } else {
      alert("링크를 입력해 주세요.");
    }
  };

  const {
    data: folderData,
    isPending,
    isError,
  } = useQuery<FolderData[]>({
    queryKey: ["folderData", userId],
    queryFn: () => getData({ endpoint: `/users/${userId}/folders` }),
  });

  const {
    mutate,
    isPending: isLinkPending,
    isError: isLinkError,
  } = useMutation<any, AxiosError, { url: string; folderId: number | null }>({
    mutationFn: (requestData) => postData({ endpoint: "/links", requestData }),
    onSuccess: () => {
      queryClient.invalidateQueries();
      setAddLinkModal(false);
      setInputValue("");
    },
    onError: () => {
      alert("유효한 URL이 아닙니다.");
    },
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Image
          src="images/link.svg"
          alt="add-link-icon"
          width={20}
          height={20}
          priority
        />
        <input
          className={styles.link_input}
          placeholder=" 링크를 추가해 보세요"
          onChange={handleInputChange}
          value={inputValue}
        />
        <button
          className={styles.cta}
          onClick={(e) => {
            handleAddLinkClick(e, inputValue);
          }}
        >
          추가하기
        </button>
      </div>
      <CommonModal
        isModalShow={addLinkModal}
        setter={setAddLinkModal}
        title="폴더에 추가"
        subtitle={inputValue}
        buttonText="추가하기"
        folders={folderData}
        color="linear-gradient"
        handleClickButton={(value) => {
          const requestData = { url: inputValue, folderId: value as number };
          mutate(requestData);
        }}
      />
    </div>
  );
}
