
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
 

  useEffect(()=> {
    document.title = `Page Not Found / Cinemate`
  })

  

  return (
    <main>
      <section className="  flex flex-col justify-center  px-2 text-white">
        <div className="text-7xl  font-bold">
          <p>
            404 Oops!
            <br />
            page not found
          </p>
        </div>

        <div className="flex justify-center my-4">
          <Link to='/'>
          <button
            
            className="w-64 font-medium text-xl bg-blue-700 rounded px-2 py-2 cursor-pointer mr-2 mb-2"
          >
            Back to Cinemate
          </button>
          </Link>
        </div>
      </section>
    </main>
  );
};
