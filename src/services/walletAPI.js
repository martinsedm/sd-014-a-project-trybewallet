import { ERROR, loadingAPI, walletAPISuccess } from '../actions';

const walletAPI = 'https://economia.awesomeapi.com.br/json/all';

const fetchCurrencies = () => (
  async (dispatch) => {
    dispatch(loadingAPI());
    try {
      const response = await fetch(walletAPI);
      if (!response.ok) throw new Error('xabléu');
      const data = await response.json();
      const filter = Object.keys(data).filter((currencie) => currencie !== 'USDT');
      dispatch(walletAPISuccess(filter));
      dispatch(loadingAPI());
    } catch (error) {
      dispatch(ERROR(error.message));
      dispatch(loadingAPI());
    }
  }
);

export default fetchCurrencies;
