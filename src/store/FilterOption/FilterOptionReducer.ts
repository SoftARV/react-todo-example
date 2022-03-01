import { FilterOptions } from "../../utils/interfaces";
import { FilterOptionActions, FilterOptionActionType } from "./FilterOptionActions";

export const filterOptionReducer = (state: FilterOptions = FilterOptions.all, action: FilterOptionActionType) => {
  switch(action.type) {
    case FilterOptionActions.setFilter: {
      const { payload } = action;
      return payload;
    }
    default: {
      return state
    }
  }
};