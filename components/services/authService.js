import { API } from ".";

export const userLogin = async (data) => {
  try {
    const response = await fetch(`${API}/api/auth/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (e) {
    return e;
  }
};

export const userSignup = async (data) => {
  try {
    const response = await fetch(`${API}/api/auth/register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (e) {
    return e;
  }
};

export const verifyToken = async (token) => {
  console.log("auth header token", token);
  try {
    const response = await fetch(`${API}/api/auth/verify-token/`, {
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
