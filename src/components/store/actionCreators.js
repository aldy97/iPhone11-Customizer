import * as constants from './Constants';

export const handleChooseModel = (index) => ({
  type: constants.CHOOSE_MODEL,
  index,
});

export const handleChooseCap = (index) => ({
  type: constants.CHOOSE_CAP,
  index,
});

export const handleChooseAC = (index) => ({
  type: constants.CHOOSE_AC,
  index,
});
