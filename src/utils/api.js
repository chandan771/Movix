import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTg2NGVmMzE3YmE1NWZiZmIwMGUxNDBmOGM2NjQyNSIsInN1YiI6IjY0Nzk5MGE5ZTMyM2YzMDEyNzUwZDJlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P--7EZGlkvEZzMHXY05gLWaYKJ0zYNOW1YmILw-a5DI";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
