import fetchJsonp from "fetch-jsonp";

const apiUrl = process.env.REACT_APP_BEHANCE_API_URL;
const apiKey = process.env.REACT_APP_BEHANCE_API_KEY;

export const Api = {
  get: async (url, paramString) => {
    const params = paramString ? `&${paramString}` : "";
    const response = await fetchJsonp(
      `${apiUrl}${url}?api_key=${apiKey}${params}`
    );
    return response.json();
  }
};

// future way to catch errors, need to update calls tho
// export const Api = {
//   get(url, paramString) {
//     const params = paramString ? `&${paramString}` : "";
//     fetchJsonp(`${apiUrl}${url}?api_key=${apiKey}${params}`)
//       .then(function(response) {
//         return response.json();
//       })
//       .catch(function(ex) {
//         console.log("parsing failed", ex);
//       });
//   }
// };
