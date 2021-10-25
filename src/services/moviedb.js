import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { TMDB_API_KEY } from '../apis/tmdb/key'

// RTK Query

// Define a service using a base URL and expected endpoints
export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
  endpoints: (builder) => ({
    getGenreNames: builder.query({
      query: (lang) => `genre/movie/list?api_key=${TMDB_API_KEY}&language=${lang}`,
    }),
    getMultipleMoviesByGenre: builder.query({
      query: (ids, lang) => `/discover/movie?api_key=${TMDB_API_KEY}&language=${lang}&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=${ids}&with_watch_monetization_types=flatrate&append_to_response=videos,images&include_image_language`,
    }),
    getMovieDetails: builder.query({
      query: (movieID, lang) => `movie/${movieID}?api_key=${TMDB_API_KEY}&language=${lang}`
    }),
  
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetGenreNamesQuery, useGetMultipleMoviesByGenreQuery, useGetMovieDetailsQuery } = tmdbApi