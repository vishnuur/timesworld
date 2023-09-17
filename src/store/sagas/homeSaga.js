import { put, call, takeEvery } from "redux-saga/effects";
import { homeData } from "../../Services/apis/home";
import {
  fetchHomeData,
  isLoadingFn,
  saveMapData,
} from "../reducers/homeReducer";

function* getHomeData({ payload }) {
  try {
    yield put({ type: isLoadingFn, payload: true });
    const mapData = yield call(homeData, null);
    yield put({ type: saveMapData, payload: mapData });
  } catch (er) {
    console.log(er);
  } finally {
    yield put({ type: isLoadingFn, payload: false });
  }
}

function* homeSaga() {
  yield takeEvery(fetchHomeData, getHomeData);
}

export default homeSaga;
