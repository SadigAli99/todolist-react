const BASE_URL = "http://localhost:8000/api";

export const request = async (endpoint, options = {}) => {
  const response = await fetch(`${BASE_URL}/${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error("API request failed");
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
};
