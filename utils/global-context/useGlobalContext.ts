import {useContext} from "react";
import {ButterContext} from "@/utils/global-context/index";

const useGlobalContext = () => {
    const contextValue = useContext(ButterContext);
    return contextValue;
}

export default useGlobalContext;
