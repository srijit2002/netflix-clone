
const API_KEY=`6fb159717141801ece965bbb7ad85d38`;

const requests=[
    {title:`Trending Now`,url:`/trending/all/day?api_key=${API_KEY}`},
    {title:`Popular on Netflix`,url:`/movie/top_rated?api_key=${API_KEY}`},
    {title:`Indian Hits`,url:`/discover/movie?api_key=${API_KEY}&language=&with_original_language=hi`},
    {title:`Tv Dramas`,url:`/discover/tv?api_key=${API_KEY}&with_genres=18`},
    {title:`Documentaries`,url:`/discover/movie?api_key=${API_KEY}&with_genres=99`},
    {title:`Comedies`,url:`/discover/movie?api_key=${API_KEY}&with_genres=35`},
    {title:`Animes`,url:`/discover/movie?api_key=${API_KEY}&with_genres=16`},
    {title:`Horror`,url:`/discover/movie?api_key=${API_KEY}&with_genres=27`},
    {title:`Romance`,url:`/discover/movie?api_key=${API_KEY}&with_genres=10749`},
    {title:`War`,url:`/discover/movie?api_key=${API_KEY}&with_genres=10752`},
    {title:`Adventure`,url:`/discover/movie?api_key=${API_KEY}&with_genres=12`}
]

export default requests;