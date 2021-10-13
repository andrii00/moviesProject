import { call, put, all, takeLatest } from "redux-saga/effects";

import { MOVIES_REQUEST, MOVIES_FAIL, MOVIES_SUCCESS } from "../action-types";
import { MoviesService } from "../../services";

function* getMovies() {
    try {
        const { data: { results } } = yield call(MoviesService.getMovies);

        yield put({
            type: MOVIES_SUCCESS,
            payload: results
        });
    } catch (error) {
        console.log('Error', error);

        yield put({ type: MOVIES_FAIL });
    }
}

function* getMoviesSaga() {
    yield takeLatest(MOVIES_REQUEST, getMovies);
}

export function* moviesSagas() {
    yield all([
        call(getMoviesSaga)
    ])
}