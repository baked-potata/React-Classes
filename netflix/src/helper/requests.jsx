const API_KEY = "f37425acc714cd0d75907e63281a15f5";

// export const requests = {
//   getPopularMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
// };

export const requests = {
  getNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=en-US`,
};
