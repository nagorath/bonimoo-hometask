import styles from '../../Styles/DataCard.module.scss';


function DataCard(props) {
  return (
    <div className={styles.card_wrapper}>
        <div className={styles.card_container}>
            <img src={props.data.images['Poster Art'].url} alt=""></img>
        </div>
        <div className={styles.title_container}>
          <span>{props.data.title}</span>
        </div>
    </div>
  );
}

export default DataCard;