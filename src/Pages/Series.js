import styles from '../Styles/Series.module.scss';
import DataCard from '../Components/DataCard/DataCard';
import  { useEffect, useState } from 'react';



function Series() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [series, setSeries] = useState([]);
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const url ='https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json';
      const response = await fetch(url);
      if (response.status === 200) {
        const data = await response.json();
        const filteredData = data.entries.filter((movie, i) => {
          return movie.releaseYear >= 2010 && movie.programType === 'series'
        })
        setSeries(filteredData.slice(0, 21));
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setHasError(true);
      }
    }
    fetchData();
  
  }, []);
  return (
    <div className={styles.series_container}>
      {
        isLoading 
        ? <span>Loading...</span>
        : series.map(movie => {
          return (
            <DataCard data={movie} />
          );
        })
      }
      <span>{hasError ? 'Oops, something went wrong...' : ''}</span>
    </div>
  );
}

export default Series;