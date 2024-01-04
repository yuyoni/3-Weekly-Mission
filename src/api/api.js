const folderApiUrl = process.env.REACT_APP_FOLDER_API;
const userApiUrl = process.env.REACT_APP_USER_API;

export async function fetchFolderData() {
  try {
    const response = await fetch(folderApiUrl);
    const body = await response.json();
    return body;
  } catch {
    throw Error("폴더 정보를 찾을 수 없습니다.");
  }
}

export async function fetchUserData() {
  try {
    const response = await fetch(userApiUrl);
    const body = await response.json();
    return body;
  } catch {
    throw Error("사용자 정보를 찾을 수 없습니다. ");
  }
}
