import axios from 'axios';

export const fetchBooksByAuthor = async (author) => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=inauthor:${author}`
    );

    return response.data.items;
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};
