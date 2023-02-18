import Image from 'next/image'
import Link from 'next/link'
import { FiThumbsUp } from 'react-icons/fi'

const Card = ({ results }) => {
  return (
    <Link
      href={`/movie/${results.id}`}
      className="cursor-pointer sm: p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group"
    >
      <Image
        src={`http://image.tmdb.org/t/p/original/${
          results.backdrop_path || results.poster_part
        }`}
        width={500}
        height={300}
        className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
        placeholder="blur"
        blurDataURL="/spinner.svg"
        alt="some image"
      />

      <div className="p-2">
        <p className="line-clamp-2">{results.overview}</p>
        <h2 className="truncate text-lg font-bold ">
          {results.title || results.name}
        </h2>
        <div className="flex items-center justify-between mt-2">
          <p>{results.release_date || results.first_air_date}</p>
          <p className="flex items-center gap-1">
            <FiThumbsUp /> {results.vote_count}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default Card
