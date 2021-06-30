import React,{useContext} from 'react'
import {AppContext} from '../context/context'

export const MovieControls = ({movie,type}) => {

const {removeMovieFromWatchlist,addMovieToWatched,removeFromWatched,moveToWatchlist} = useContext(AppContext)
    return (
        <div className="inner-card-controls">
            {type === 'watchlist' && (
                <>
                <button className="ctrl-btn" onClick={()=>addMovieToWatched(movie)}>
                    Add to Watched
                </button>

                <button className="ctrl-btn" onClick={()=>removeMovieFromWatchlist(movie.id)}>
                    Remove from WatchList
                </button>
                </>
            )}

            {type === 'watched' && (
                <>
                <button className="ctrl-btn" onClick={()=>moveToWatchlist(movie)}>Add to WatchList</button>
                <button className="ctrl-btn" onClick={()=>removeFromWatched(movie.id)}>Remove</button>
                </>
            )}
        </div>
    )
}
