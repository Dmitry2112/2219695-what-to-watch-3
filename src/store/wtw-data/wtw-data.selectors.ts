import {State} from '../../types/state.ts';
import {SmallFilm} from '../../types/small-film.ts';
import {NameSpace} from '../../components/app/const.ts';
import {Film} from '../../types/film.ts';
import {ReviewData} from '../../types/reviewData.ts';
import {Genre} from '../../types/genre.ts';
import {PromoFilm} from '../../types/promo-film.ts';

export const getFilms = (state: Pick<State, NameSpace.Data>): SmallFilm[] => state[NameSpace.Data].films;
export const getFilmsDataLoadingStatus = (state: Pick<State, NameSpace.Data>): boolean => state[NameSpace.Data].isFilmsDataLoading;
export const getDetailsFilm = (state: Pick<State, NameSpace.Data>): Film | undefined => state[NameSpace.Data].detailsFilm;
export const getDetailsFilmDataLoadingStatus = (state: Pick<State, NameSpace.Data>): boolean => state[NameSpace.Data].isDetailsFilmDataLoading;
export const getReviews = (state: Pick<State, NameSpace.Data>): ReviewData[] => state[NameSpace.Data].reviews;
export const getReviewsDataLoadingStatus = (state: Pick<State, NameSpace.Data>): boolean => state[NameSpace.Data].isReviewsDataLoading;
export const getSimilarFilms = (state: Pick<State, NameSpace.Data>): SmallFilm[] => state[NameSpace.Data].similarFilms;
export const getSimilarFilmsDataLoadingStatus = (state: Pick<State, NameSpace.Data>): boolean => state[NameSpace.Data].isSimilarFilmsDataLoading;

export const getPromoFilm = (state: Pick<State, NameSpace.Data>): PromoFilm | undefined => state[NameSpace.Data].promoFilm;
export const getPromoFilmDataLoadingStatus = (state: Pick<State, NameSpace.Data>): boolean => state[NameSpace.Data].isPromoFilmDataLoading;
export const getFavourites = (state: Pick<State, NameSpace.Data>): SmallFilm[] => state[NameSpace.Data].favourites;
export const getFavouritesDataLoadingStatus = (state: Pick<State, NameSpace.Data>): boolean => state[NameSpace.Data].isFavouritesDataLoading;
export const getGenres = (state: Pick<State, NameSpace.Data>): Genre[] => ['All genres', ...new Set(state[NameSpace.Data].films.map((film) => film.genre))] as Genre[];
