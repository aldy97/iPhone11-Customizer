import * as constants from './Constants';

export const handleChooseModel = (index) => ({
  type: constants.CHOOSE_MODEL,
  index,
});
