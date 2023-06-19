import {useAppDispatch} from "./hooks";
import {rootActions} from "../store/root-actions";
import {useMemo} from "react";
import {bindActionCreators} from "redux";

export const useActions = () => {
    const dispatch = useAppDispatch()

    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
