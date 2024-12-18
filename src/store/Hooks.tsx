import { AppDispatch, RootState } from "./store";
import { TypedUseSelectorHook, useDispatch, UseDispatch, useSelector } from "react-redux";

export const useAppDispatch:()=> AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;