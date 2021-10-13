import { all, call } from "redux-saga/effects";

import { moviesSagas } from "./movie.saga";

export function* sagas() {
    yield all([
        call(moviesSagas),
    ]);
}