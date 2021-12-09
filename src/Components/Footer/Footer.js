import styles from '../../Styles/Footer.module.scss';
import classNames from 'classnames';
import FBLogo from '../../Assets/facebook-white.svg';
import TwitterLogo from '../../Assets/twitter-white.svg';
import InstagramLogo from '../../Assets/instagram-white.svg';
import AppStoreLogo from '../../Assets/app-store.svg';
import GooglePlayLogo from '../../Assets/play-store.svg';
import MicrosoftLogo from '../../Assets/windows-store.svg';

const LINKS = ['Home', 'Terms and Conditions', 'Privacy Policy', 'Collection Statement', 'Help', 'Manage Account'];

function Footer() {
  return (
    <div className={styles.footer_container}>
      <div className={styles.links_container}>
        {
          LINKS.map(link => {
            return (
              <>
                <span className={classNames(styles.link_text, styles.pointer)}>{link}</span>
                <span className={styles.link_text}>{link !== 'Manage Account' ? '|' : ''}</span>
              </>
            )
          })
        }
      </div>
      <div className={styles.copyright_container}>
        <span>Copyright © 2016 Xtreamer. All Rights Reserved</span>
      </div>
      <div className={styles.logos_btns_container}>
        <div className={styles.social_media_logos_container}>
          <img src={FBLogo} alt=""></img>
          <img src={TwitterLogo} alt=""></img>
          <img src={InstagramLogo} alt=""></img>
        </div>
        <div className={styles.buy_logos_container}>
          <img src={AppStoreLogo} alt=""></img>
          <img src={GooglePlayLogo} alt=""></img>
          <img src={MicrosoftLogo} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default Footer;