import React,{useContext} from 'react';
import {AppContext} from '../context/context'
import { MovieCard } from './MovieCard';

export const WatchList = () => {

const {watchlist } = useContext(AppContext)
     return (
        <div className="movie-page">
            <div className="container">
                <div className="header">
                    <div className="heading">
                    My Watchlist
                    </div>
                    </div>
                    {watchlist.length > 0 ? (
                        <div className="movie-grid">
                {watchlist.map((movie ) => (
                <MovieCard movie={movie} type="watchlist"/>
                ))}
                </div>
                    ) :(
                <h2 className="no-movies">No movies in your list, add some...</h2>  
             )}
                    

            </div>
            
        </div>
    )
}
