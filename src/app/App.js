// import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../components/header/header';
import MainBanner from '../components/main-banner/main-banner';
import Popular from '../components/popular/popular';
import Trailers from '../components/trailers/trailers';
import Promo from '../components/promo-banner/promo-banner';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MovieModal from '../components/movie-modal/movie-modal';
import MyAccount from '../components/pages/my-account/my-account';
import InCinemas from '../components/pages/in-cinemas/in-cinemas';
import PromoPage from '../components/pages/promo_page/promo-page';
import LoginPage from '../components/log-in-page/log-in-page';
import Genres from "../components/genres/genres";
import GenrePage from '../components/pages/genre-page/genre-page';
import FullSearchPage from '../components/pages/search-page/full-search-page';
import GenresPage from '../components/pages/all-genres-page/all-genres-page';
import Trending from '../components/pages/trending/trending';
import MobileMenu from '../components/mobile-menu/mobile-menu';
import ErrorBoundary from '../components/error-boundary/error-boundary';
import Search from '../components/search/search';
import './App.css';

const App = () => {

  const [pageState, setPageState] = useState(false);
  const [loginPageState, setLoginPageState] = useState(false);
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

    const closeModal = ()  => {
      dispatch({type: "RESET"});
      setPageState(false)
      setLoginPageState(false)
    }

    const openModal = () => {
      setLoginPageState(true)
    }

    const onGetData = (data, id) => {
      const index = data.findIndex(item => item.id === id);
      setData(data[index]);
      setPageState(true);
    }

    const onClickMenuOpen = () => {
      setIsOpen(!isOpen);
    }

    const moviePage = pageState ? <MovieModal filmData={data} closeModal={closeModal}/> : null;
    const loginPage = loginPageState ? <LoginPage closeModal={closeModal}/> : null;
    const onOpenMenu = isOpen ? <MobileMenu onClickMenuOpen={onClickMenuOpen} onIsOpen={isOpen} onGetData={onGetData}/> : null;

    return (
      <Router>
          {moviePage}
          {loginPage}
          {onOpenMenu}
          <Header onIsOpen={isOpen} onClickMenuOpen={onClickMenuOpen} onGetData={onGetData}/>
          <Routes>
              <Route path="/" element={<FullComponent openModal={openModal} onGetData={onGetData} />}/>
              <Route path="in-cinemas" element={<InCinemas onGetData={onGetData} />}/>
              <Route path="my-account" element={<MyAccount/>}/>
              <Route path="promo-page" element={<PromoPage openModal={openModal}/>}/>
              <Route path="genre-page/:id" element={<GenrePage onGetData={onGetData}/>}/>
              <Route path="search" element={<FullSearchPage onGetData={onGetData} />}/>
              <Route path="genres" element={<GenresPage onGetData={onGetData}/>}/>
              <Route path="trending" element={<Trending onGetData={onGetData}/>}/>
          </Routes>
      </Router>
    );
}

const FullComponent = ({onGetData, openModal}) => {
  return (
    <>
          <MainBanner openModal={openModal}/>
          <Popular onGetData={onGetData}/> 
          <Genres/>
          <Trailers/>
          <Promo openModal={openModal}/>
    </>
  )
}

export default App;
