const Home = async ({ searchParams }) => {
  const genre = searchParams.genre || 'fetchTrending'
  const res = await fetch(
    `http://api.themoviedb.org/3/${
      genre === 'fetchTopRated' ? 'movie/top_rated' : 'trending/all/week'
    }?api_key=${process.env.API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  )
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = await res.json()
  const results = data.results

  return (
    <div>
      {results.map((res) => {
        return <div key={res.id}> {res.title}</div>
      })}
    </div>
  )
}

export default Home
