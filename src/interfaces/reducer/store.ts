import { commonReducerInterface } from "./commonReducer";
import { userReducerInterface } from "./userReducer";

export interface storeInterface {
    user: userReducerInterface,
    common: commonReducerInterface
}