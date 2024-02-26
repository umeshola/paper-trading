import { atom } from "recoil";

export const userAtom = atom({
    key: 'userAtom',
    default: {
        username: '',
        balance: 0,
        password: '',
    },
});