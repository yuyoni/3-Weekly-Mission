const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

async function fetchData(param) {
  const url = `${BASE_URL}/api/${param}`;
  try {
    const response = await fetch(url);
    const body = await response.json();
    return body;
  } catch (e) {
    throw Error(e);
  }
}

export default fetchData;
