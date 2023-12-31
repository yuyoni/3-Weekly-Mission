export async function fetchFolderData() {
  try {
    const response = await fetch(
      "https://bootcamp-api.codeit.kr/api/sample/folder"
    );
    const body = await response.json();
    return body;
  } catch {
    throw Error("폴더 정보를 찾을 수 없습니다.");
  }
}

export async function fetchUserData() {
  try {
    const response = await fetch(
      "https://bootcamp-api.codeit.kr/api/sample/user"
    );
    const body = await response.json();
    return body;
  } catch {
    throw Error("사용자 정보를 찾을 수 없습니다. ");
  }
}
