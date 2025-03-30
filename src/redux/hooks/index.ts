import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { AppDispatch, RootState } from "../store";

// I will use this hook to dispatch actions in my components
export const useAppDispatch = () => useDispatch<AppDispatch>();

// I will use this hook to select state in my components
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
