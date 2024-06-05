import {
  REGISTER_USER_SUCCESS,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  REGISTER_USER_FAIL,
  DECODE_TOKEN,
  LOGOUT,
  DELETE_ACCOUNT_SUCCESS,
  DELETE_ACCOUNT_FAIL,
  ADD_FAVORITE_PRODUCT_FAIL,
  ADD_FAVORITE_PRODUCT_SUCCESS,
  REMOVE_FAVORITE_PRODUCT,
} from "../actions/authAction";

const initialState = {
  user: null,
  errors: {},
  decodedToken: null,
  productFavorite: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        errors: true,
      };
    case REGISTER_USER_FAIL:
      return {
        ...state,
        errors: true,
      };
    case DECODE_TOKEN:
      return {
        ...state,
        decodedToken: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
      };
    case DELETE_ACCOUNT_SUCCESS:
      return {
        ...state,
        user: null,
      };
    case DELETE_ACCOUNT_FAIL:
      return {
        ...state,
      };
    case ADD_FAVORITE_PRODUCT_SUCCESS:
      return {
        ...state,
        productFavorite: [...state.productFavorite, action.payload],
      };
    case ADD_FAVORITE_PRODUCT_FAIL:
      return {
        ...state,
        productFavorite: [],
      };
    case REMOVE_FAVORITE_PRODUCT:
      return {
        ...state,
        productFavorite: state.productFavorite.filter(
          (product) => product !== action.payload
        ),
      };
    default:
      return state;
  }
}
