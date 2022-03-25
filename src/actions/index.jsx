import { auth, provider, storage } from "../firebase";
import { SET_USER } from "./actionType";
import db from "../firebase"

export const setUser = (payload) => {
    return {
        type: SET_USER,
        user: payload,
    }
}

export function signInApi() {
    return (dispatch) => {
        auth.signInWithPopup(provider)
            .then((payload) => {
                dispatch(setUser(payload.user))
                console.log(setUser.user);
            })
            .catch((err) => alert(err.message));
    };
}

export function getUserAuth() {
    return (dispatch) => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                dispatch(setUser(user));
            }
        });
    };
}

export function signOutApi() {
    return (dispatch) => {
        auth.signOut()
            .then(() => dispatch(setUser(null)))
            .catch((err) => alert(err.message));
    };
}

export function postImgApi(payload) {
    return (dispatch) => {
        if (payload.image !== "") {


        } else if (payload.video) {
            db.collection("linkedin").add({
                actor: {
                    description: payload.user.email,
                    title: payload.user.displayName,
                    date: payload.timestamp,
                    image: payload.user.photoURL,
                },
                video: payload.video,
                sharedImg: "",
                likes: 0,
                comments: 0,
                description: payload.description,
            });
        } else if (payload.image === "" && payload.video === "") {
            db.collection("linkedin").add({
                actor: {
                    description: payload.user.email,
                    title: payload.user.displayName,
                    date: payload.timestamp,
                    image: payload.user.photoURL,
                },
                video: "",
                sharedImg: "",
                likes: 0,
                comments: 0,
                description: payload.description,
            });
        }
    };
}
