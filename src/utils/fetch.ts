export const post = async (url: string, data: any) => {
  const result = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const res = await result.json();
  return res;
};

export const put = async (url: string, data: any) => {
  const result = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const res = await result.json();
  return res;
};

export const del = async (url: string, data: any) => {
  const result = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const res = await result.json();
  return res;
};

export const get = async (url: string) => {
  const result = await fetch(url);
  const res = await result.json();
  return res;
};
