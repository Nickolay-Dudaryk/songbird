import axios from "axios";
import { BIRD_LIST_REQUEST, BIRD_LIST_SUCCESS, BIRD_LIST_FAIL} from '../constants/birdConstants';

export const listBirds = () => async (dispatch) => {
  try {
    dispatch({ type: BIRD_LIST_REQUEST })

    const { data } = await axios.get('/api/birds');

    dispatch({
      type: BIRD_LIST_SUCCESS,
      payload: data
    })
  } catch (e) {
    dispatch({
      type: BIRD_LIST_FAIL,
      payload: e.data.message ? e.response.data.message : e.message
    })
  }
}