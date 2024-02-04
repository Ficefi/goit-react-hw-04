import axios from "axios";

const key = "hHe-q5oNG47NC4D_AGY3ewwnmUayb8od-adbNmMHp58";

export const requestResponse = async (query, page) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query: query,
      client_id: key,
      page: page,
    },
  });
  return response.data.results;
};
