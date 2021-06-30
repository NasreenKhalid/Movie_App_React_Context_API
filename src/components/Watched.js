import React,{useContext} from 'react'
import {AppContext} from '../context/context'
import {MovieCard} from './MovieCard'

export const Watched = () => {

const {watched} = useContext(AppContext)
    return (
        <div className="movie-page">
        <div className="container">
            <div className="header">
                <div className="heading">
                Watched Movies
                </div>
                </div>
                {watched.length > 0 ? (
                    <div className="movie-grid">
            {watched.map((movie ) => (
            <MovieCard movie={movie} type="watched"/>
            ))}
            </div>
                ) :(
            <h2 className="no-movies">No movies in your list, add some...</h2>  
         )}
                

        </div>
        
    </div>
    )
}

