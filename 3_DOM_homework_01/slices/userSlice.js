import {getUser} from "../API.js";

const userData = await getUser(); // я не смог вкорячить асинхронный метод в класс, придется пока обойтись костылями

class UserSlice {
    _user = {};

    constructor(userData) {
        if (typeof UserSlice.instance === "object") {
            return UserSlice.instance;
        }
        this._user = userData;
        UserSlice.instance = this;
        return this;
    }

    getUserSlice() {
        return this._user;
    }
    setUserSlice(lessonID, boolean) {
        this._user[lessonID] = boolean;

    }
}

export const userSlice = new UserSlice(userData);


