import resolveChartsData from '../../services/charts';

export const START_LOADING_CHARTS = 'START_LOADING_CHARTS';
export const STOP_LOADING_CHARTS = 'STOP_LOADING_CHARTS';
export const LOAD_CHARTS_DATA = 'LOAD_CHARTS_DATA';

export default function fetchChartsData() {
    return (dispatch, getState) => {
        const { isFirstTime } = getState().charts;
        if (isFirstTime) {
            dispatch({ type: START_LOADING_CHARTS });
            return resolveChartsData()
                .then((chartData) => {
                    dispatch({
                        type: LOAD_CHARTS_DATA,
                        payload: chartData,
                    });
                    dispatch({ type: STOP_LOADING_CHARTS });
                }).catch((error) => {
                // eslint-disable-next-line no-console
                    console.log(error);
                    dispatch({ type: STOP_LOADING_CHARTS });
                });
        }
        return null;
    };
}
