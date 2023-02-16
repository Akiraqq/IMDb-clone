import Card from '@/components/Card'

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
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 max-w-6xl mx-auto py-4 px-2">
      {results.map((res) => {
        return <Card key={res.id} results={res} />
      })}
    </div>
  )
}

export default Home
