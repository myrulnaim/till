function apiUrl(endpoint) {
  const url = new URL(`https://platform.tillmobile.com/api/${endpoint}`);
  url.searchParams.set("username", process.env.REACT_APP_TILL_USERNAME);
  url.searchParams.set("api_key", process.env.REACT_APP_TILL_API_KEY);

  return url;
}

function postData(url, data) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify(data)
  });
}

export async function results() {
  const res = await fetch(apiUrl("results"));
  return res.json();
}

export async function sendMessage(phoneNumbers, message) {
  const res = await postData(apiUrl("send"), {
    phone: phoneNumbers,
    text: message
  });

  return res.json();
}
