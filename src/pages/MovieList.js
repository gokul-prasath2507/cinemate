

import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";

export const MovieList = ({apipath,title}) => {
  const {data : movies}= useFetch(apipath)
   //eslint-disable-next-line
  const pageTitle = useTitle(title)
  

  return (
   
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {movies.map((movie)=> (<Card key={movie.id} movie={movie} />))}
        </div>
      </section>
    
  );
};
