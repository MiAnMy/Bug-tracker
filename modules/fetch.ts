const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};
export const post = (url: string, data: object) =>
  fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data),
  });

export const patch = (url: string, data: object) =>
  fetch(url, {
    method: "PATCH",
    headers: headers,
    body: JSON.stringify(data),
  });
