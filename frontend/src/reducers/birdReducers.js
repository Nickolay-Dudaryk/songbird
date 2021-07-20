import { BIRD_LIST_REQUEST, BIRD_LIST_SUCCESS, BIRD_LIST_FAIL} from '../constants/birdConstants';

export const birdListReducer = (state = { birds: [] }, action) => {
  switch (action.type) {
    case BIRD_LIST_REQUEST:
      return { loading: true, birds: [] };
    case BIRD_LIST_SUCCESS:
      return { loading: false, birds: action.payload };
    case BIRD_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
