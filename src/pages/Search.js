import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";

import { useTitle } from "../hooks/useTitle";

export const Search = ({apipath}) => {
  
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get('q')

  const {data : movies}= useFetch(apipath, queryTerm)
 useTitle(`Search results for ${queryTerm} / Cinemate`)

   


  return (
    <main>
      <section className="py-7">
        <p className="text-3xl, text-white">{movies.length===0? `no result for '${queryTerm}'`: `Result for '${queryTerm}'`}</p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie)=> (<Card key={movie.id} movie={movie} />))}
        </div>
      </section>
    </main>
  )
}
