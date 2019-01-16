import { resolveChartsData } from '../../services/charts';

export const LOADING_CHARTS_DATA = 'LOADING_CHARTS_DATA';
export const LOAD_CHARTS_DATA = 'LOAD_CHARTS_DATA';

export function fetchChartsData() {
    return (dispatch) => {
        dispatch({ type: LOADING_CHARTS_DATA });
        resolveChartsData()
            .then((chartData) => {
                dispatch({
                    type: LOAD_CHARTS_DATA,
                    payload: chartData,
                });
            }).catch((error) => {
                console.log(error);
            });
    };
}
