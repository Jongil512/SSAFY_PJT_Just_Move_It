export const SET_MOVIE_CODE = "SET_MOVIE_CODE";
export const PUSH_MOVIE_CODE = "PUSH_MOVIE_CODE";


export function setMovieCode(value) {
    return {
        type: SET_MOVIE_CODE,
        code: value
    };
}
export function pushMovieData(movieCode, movie){
    return {
        type: PUSH_MOVIE_CODE,
        movieCode: movieCode,
        movieInfo: movie
    }
}
