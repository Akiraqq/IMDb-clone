import Image from 'next/image'

const MoviePage = async ({ params }) => {
  const movieId = params.id
  const res = await fetch(
    `http://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  )
  const movie = await res.json()

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`http://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_part
          }`}
          width={500}
          height={300}
          className="rounded-lg"
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="Some image"
        />
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">{movie.title}</h2>
          <p className="text-lg mb-3 ">
            <span className="font-semibold mr-2">Overview:</span>
            {movie.overview}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-2">Date released:</span>
            {movie.release_date || movie.first_air_date}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoviePage
