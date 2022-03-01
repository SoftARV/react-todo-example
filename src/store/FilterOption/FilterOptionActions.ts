import { FilterOptions } from "../../utils/interfaces";

export enum FilterOptionActions {
  setFilter = 'SET_FILTER'
}

interface SetFilterOptionActionType {
  type: FilterOptionActions,
  payload: FilterOptions
}
export const setFilterOptionActionCreator = (filter: FilterOptions): SetFilterOptionActionType => {
  return {
    type: FilterOptionActions.setFilter,
    payload: filter
  };
};

export type FilterOptionActionType = SetFilterOptionActionType
