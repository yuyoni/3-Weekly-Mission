const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

async function fetchData(param, method = "GET", data = null) {
  const url = `${BASE_URL}/api/${param}`;
  try {
    if (method === "POST") {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(data),
      });
      const body = await response.json();
      return body;
    }
    const response = await fetch(url);
    const body = await response.json();
    return body;
  } catch (e) {
    throw Error(e);
  }
}

export default fetchData;
