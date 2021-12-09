import styles from '../Styles/Home.module.scss';
import GenreCard from '../Components/GenreCard/GenreCard';
import GENRES from '../Common/Genres';
import  { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { subHeaderText as subHeaderTextAtom } from '../RecoilState/atoms';


function Home() {
  const [subHeaderText, setSubHeaderText] = useRecoilState(subHeaderTextAtom);
  useEffect(() => {
    setSubHeaderText('Titles');
  }, [])
  return (
    <div className={styles.home_container}>
      {GENRES.map(genre => {
        return (
          <GenreCard cardData={genre}></GenreCard>
        )
      })}
    </div>
  );
}

export default Home;