import axios from "axios";
const api = "http://gutendex.com/";

export const getBook = async (bookId) => {
  try {
    const response = await axios.get(`${api}/books/${bookId}`);

    return response.data;
  } catch (error) {
    return error;
  }
};
export const getAllBooks = async () => {
  try {
    const response = await axios.get(`http://gutendex.com/books/`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const newPage = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return error;
  }
};
export const search = async (query) => {
  try {
    const response = await axios.get(`${api}/books?search=${query}`);
    return response.data;
  } catch (error) {
    return error;
  }
};
