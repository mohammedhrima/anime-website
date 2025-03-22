"use server";
export const fetchAnime = async (page: number) => {
  try {
    const response = await fetch(
      `https://api.jikan.moe/v4/anime?page=${page}&limit=8&order=popularity`
    );
    const json = await response.json();
    return json.data;

    
  } catch (error) {
    console.error(error);
  }
};
