import { userAtom } from "../atoms/userAtom"
import { selector } from "recoil"

export const balanceSelector = selector({
    key: 'balanceSelector',
    get: ({get}) => {
        const user = get(userAtom);
        return user.balance;
    }
});