import styles from '../../Styles/Header.module.scss';
import globalStyles from '../../index.module.scss'
import classNames from 'classnames';
import { useRecoilValue } from 'recoil';
import { subHeaderText as subHeaderTextAtom } from '../../RecoilState/atoms';



function Header() {
  const subHeaderText = useRecoilValue(subHeaderTextAtom);

  return (
    <div className={styles.header_container}>
      <div className={classNames(styles.main_header_container, globalStyles.header)}>
        <div className={styles.header_title_container}>
          Xtreamer
        </div>
        <div className={styles.btns_container}>
          <span>Log in</span>
          <button>Start your free trail</button>
        </div>
      </div>
      <div className={classNames(styles.sub_header_container, globalStyles.header)}>
        Popular {subHeaderText}
      </div>
    </div>
  );
}

export default Header;