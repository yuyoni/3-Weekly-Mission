import getData from "@apis/getData";
import CommonModal from "@components/modal/CommonModal";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FolderData, Id, LinkList } from "type";
import styles from "../styles/AddLink.module.css";
import postData from "@apis/postData";
import { AxiosError } from "axios";
import { getCookie } from "cookies-next";

type AddLinkProps = {
  userId: Id;
};

export default function AddLink({ userId }: AddLinkProps) {
  const queryClient = useQueryClient();
  const [inputValue, setInputValue] = useState("");
  const [addLinkModal, setAddLinkModal] = useState(false);
  const accessToken = getCookie("accessToken");

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
  } = useMutation<any, AxiosError, { url: string; folderId: Id }>({
    mutationFn: (requestData) =>
      postData({ endpoint: "/links", requestData, token: accessToken }),
    onSuccess: () => {
      queryClient.invalidateQueries();
      setAddLinkModal(false);
    },
  });

  if (isPending) return "loading...";
  if (isError) return "error";

  if (isLinkPending) return "link loading...";
  if (isLinkError) return "link error";

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
