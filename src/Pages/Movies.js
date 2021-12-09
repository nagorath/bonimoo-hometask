import DataCard from '../Components/DataCard/DataCard';
import styles from '../Styles/Movies.module.scss';
import  { useEffect, useState } from 'react';


function Movies() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const url ='https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json';
      const response = await fetch(url);
      if (response.status === 200) {
        const data = await response.json();
        const filteredData = data.entries.filter((movie, i) => {
          return movie.releaseYear >= 2010 && movie.programType === 'movie'
        })
        setMovies(filteredData.slice(0, 21));
        setHasError(false);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setHasError(true);
      }
    }
    fetchData();
  
  }, []);
  return (
    <div className={styles.movies_container}>
      {
        isLoading 
        ? <span>Loading...</span>
        : movies.map(movie => {
          return (
            <DataCard data={movie}/>
          );
        })
      }
      <span>{hasError ? 'Oops, something went wrong...' : ''}</span>
    </div>
  );
}

export default Movies;