import gamesReducer from "./gamesReducer";
import detailReducer from "./detailReducer";

const rootReducer = {
  games: gamesReducer,
  detail: detailReducer,
};

export default rootReducer;
