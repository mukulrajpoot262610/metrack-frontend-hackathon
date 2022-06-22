// config variables
// export const API = "https://linode-hackathon-api.herokuapp.com";
export const API = "http://localhost:3001";
export const fetchOne = async (url, token) => {
  try {
    const response = await fetch(`${API}/api${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      mode: "cors",
    });
    return response.json();
  } catch (e) {
    return e;
  }
};

export const updateOne = async (url, token, data, method = "PUT") => {
  try {
    const response = await fetch(`${API}/api${url}`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
      mode: "cors",
    });
    return response.json();
  } catch (e) {
    return e;
  }
};

export const getMany = async (url, token) => {
  try {
    const response = await fetch(`${API}/api${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      mode: "cors",
    });
    return response.json();
  } catch (e) {
    return e;
  }
};
