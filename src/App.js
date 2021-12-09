import styles from './App.module.scss';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Series from './Pages/Series';
import Movies from './Pages/Movies';
import LayoutHOC from './Hocs/withLayout';
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <Router>
      <div className={styles.site_container}>
        <div className={styles.content_container}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/series" element={<Series />} />
            <Route exact path="/movies" element={<Movies />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default LayoutHOC(App);
