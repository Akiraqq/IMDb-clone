import Card from '@/components/Card'

const page = async ({ params }) => {
  const searchTerm = params.searchTerm
  const res = await fetch(
    `http://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&include_adult=false`
  )
  if (!res.ok) {
    throw new Error('ERROR')
  }
  const data = await res.json()
  const results = data.results
  return (
    <>
      {results && results.length === 0 && (
        <h1 className="text-center pt-6">No results found</h1>
      )}
      {results && results.length > 0 && (
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 max-w-6xl mx-auto py-4 px-2">
          {results.map((res) => {
            return <Card key={res.id} results={res} />
          })}
        </div>
      )}
    </>
  )
}

export default page
