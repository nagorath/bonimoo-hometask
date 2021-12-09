import styles from '../../Styles/GenreCard.module.scss';
import BgImg from '../../Assets/placeholder.png';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { subHeaderText as subHeaderTextAtom } from '../../RecoilState/atoms';


function GenreCard( data ) {
  const [subHeaderText, setSubHeaderText] = useRecoilState(subHeaderTextAtom);
  return (
    <div className={styles.card_wrapper}>
      <Link to={`/${data.cardData.toLowerCase()}`}>
        <div className={styles.card_container} onClick={() => {setSubHeaderText(data.cardData)}}>
            <span>{data.cardData.toUpperCase()}</span>
            <img src={BgImg} alt=""></img>
        </div>
      </Link>
      <span>Popular {data.cardData}</span>
    </div>
  );
}

export default GenreCard;