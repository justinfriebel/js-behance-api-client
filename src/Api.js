import fetchJsonp from "fetch-jsonp";

const apiUrl = "https://behance.net/v2/users";
const apiKey = "MQbHx6fRdrUAdpugpq9jw73k8TLPyq9c";

export const Api = {
  get: async (url, paramString) => {
    const params = paramString ? `&${paramString}` : "";
    const response = await fetchJsonp(
      `${apiUrl}${url}?api_key=${apiKey}${params}`
    );
    console.log(response.json());
    return response.json();
  }
};
