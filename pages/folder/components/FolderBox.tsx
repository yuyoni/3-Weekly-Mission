import CommonModal from "@components/modal/CommonModal";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/FolderBox.module.css";
import { FolderData, FolderId, FolderInfoResponseType, Id } from "type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import postData from "@apis/postData";

type FolderBoxProps = {
  folders: FolderData[];
  userId: Id;
  folderId: FolderId;
  updateFolder: (id: FolderId, name: string) => void;
};

export default function FolderBox({
  folders,
  userId,
  folderId,
  updateFolder,
}: FolderBoxProps) {
  const [addFolderModal, setAddFolderModal] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const queryClient = useQueryClient();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) setAccessToken(token);
  }, []);

  const isFolderSelected =
    folderId === null
      ? styles.selected_folder_color
      : styles.default_folder_color;

  const getFolderColorClassName = (currentFolderId: FolderId) =>
    folderId === currentFolderId
      ? styles.selected_folder_color
      : styles.default_folder_color;

  const { mutate, isPending } = useMutation<
    FolderInfoResponseType,
    AxiosError,
    { name: string }
  >({
    mutationFn: (requestData) =>
      postData<FolderInfoResponseType>({
        endpoint: "/folders",
        requestData,
        token: accessToken,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries();
      setAddFolderModal(false);
    },
    onError: (error) => {
      throw new Error(`폴더 생성 실패 : ${error.message}`);
    },
  });

  const handleAddLink = (value: string) => {
    const requestData = { name: value };
    if (accessToken)
      mutate(requestData, {
        onSuccess: () => {
          console.log("폴더 등록 성공");
        },
      });
  };

  const handleClickFolder = (
    clickedFolderId: Id,
    clickedFolderName: string
  ) => {
    updateFolder(clickedFolderId, clickedFolderName);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.folder_list}>
        <div
          className={`${styles.folder_element} ${isFolderSelected}`}
          onClick={() => handleClickFolder(null, "전체")}
        >
          전체
        </div>
        {folders &&
          folders.map(({ id, name }) => (
            <div
              className={`${styles.folder_element} ${getFolderColorClassName(
                id
              )}`}
              key={id}
              onClick={() => handleClickFolder(id, name)}
            >
              {name}
            </div>
          ))}
      </div>
      <div className={styles.folder_add}>
        <div
          className={styles.folder_add_text}
          onClick={() => setAddFolderModal(true)}
        >
          <span>폴더 추가</span>
          <Image
            src="images/add.svg"
            alt="add-icon"
            width={16}
            height={16}
            priority
          />
        </div>
        <div
          className={styles.folder_add_button}
          onClick={() => setAddFolderModal(true)}
        >
          추가하기
          <Image
            src="images/white-add.svg"
            alt="add-icon"
            width={16}
            height={16}
            priority
          />
        </div>
      </div>
      <CommonModal
        isModalShow={addFolderModal}
        setter={setAddFolderModal}
        title="폴더 추가"
        placeholder="폴더명"
        buttonText="추가하기"
        color="linear-gradient"
        handleClickButton={handleAddLink}
        isPending={isPending}
      />
    </div>
  );
}
