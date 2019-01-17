import resolveChartsData from '../../services/charts';

export const LOADING_CHARTS_DATA = 'LOADING_CHARTS_DATA';
export const LOAD_CHARTS_DATA = 'LOAD_CHARTS_DATA';

export default function fetchChartsData() {
    return (dispatch, getState) => {
        const { isFirstTime } = getState().charts;
        if (isFirstTime) {
            dispatch({ type: LOADING_CHARTS_DATA });
            resolveChartsData()
                .then((chartData) => {
                    dispatch({
                        type: LOAD_CHARTS_DATA,
                        payload: chartData,
                    });
                }).catch((error) => {
                // eslint-disable-next-line no-console
                    console.log(error);
                });
        }
    };
}
