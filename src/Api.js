import fetchJsonp from "fetch-jsonp";

const apiUrl = process.env.REACT_APP_BEHANCE_API_URL;
const apiKey = process.env.REACT_APP_BEHANCE_API_KEY;

export const Api = {
  get: async (url, paramString) => {
    // Check if API configuration is available
    if (!apiUrl || !apiKey) {
      throw new Error(
        "API configuration missing. Please check REACT_APP_BEHANCE_API_URL and REACT_APP_BEHANCE_API_KEY environment variables."
      );
    }

    const params = paramString ? `&${paramString}` : "";
    const requestUrl = `${apiUrl}${url}?api_key=${apiKey}${params}`;

    console.log("Making API request to:", requestUrl);

    try {
      const response = await fetchJsonp(requestUrl, {
        timeout: 10000, // 10 second timeout
        jsonpCallback: "callback",
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();

      // Check if the response contains an error
      if (data.error) {
        throw new Error(`API Error: ${data.error}`);
      }

      return data;
    } catch (error) {
      console.error("API request failed:", error);

      // Provide more specific error messages
      if (
        error.name === "TypeError" &&
        error.message.includes("Failed to fetch")
      ) {
        throw new Error(
          "Network error: Unable to connect to Behance API. Please check your internet connection."
        );
      } else if (error.message.includes("timeout")) {
        throw new Error(
          "Request timeout: The Behance API is not responding. Please try again later."
        );
      } else if (error.message.includes("HTTP 403")) {
        throw new Error(
          "API access forbidden: Invalid API key or rate limit exceeded."
        );
      } else if (error.message.includes("HTTP 404")) {
        throw new Error(
          "Resource not found: The requested user or endpoint does not exist."
        );
      } else if (error.message.includes("HTTP 429")) {
        throw new Error(
          "Rate limit exceeded: Please wait before making more requests (150 requests/hour limit)."
        );
      }

      throw error;
    }
  },
};
