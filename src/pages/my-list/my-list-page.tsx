import {JSX} from 'react';
import {Helmet} from 'react-helmet-async';
import FilmsList from '../../components/films-list/films-list.tsx';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../components/app/const.ts';
import Footer from '../../components/footer/footer.tsx';
import {SmallFilm} from '../../types/small-film.ts';

export type MyListPageProps = {
  smallFilmsCards: SmallFilm[];
}

export default function MyListPage({smallFilmsCards}: MyListPageProps): JSX.Element {
  return (
    <>
      <Helmet>
        <title>WTW. Мой список фильмов</title>
      </Helmet>
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <Link to={AppRoute.Main} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <FilmsList smallFilmCards={smallFilmsCards.slice(0, 9)}/>
        </section>

        <Footer/>
      </div>
    </>
  );
}
