import { getUser } from "./api";

export function isAuth() {
    return getCurrentUserNick() !== '';
}

export function getCookie(cookieName: string) {
    return document.cookie.split(';').find(a=>a.trim().startsWith(`${cookieName}=`))?.split('=')[1];
}

export function getCurrentUserNick() {
    return getCookie('user') ?? '';
}

export function deleteCookie(cookieName: string) {
    document.cookie = `${cookieName}= ;  expires=Thu, 01 Jan 1970 00:00:00 GMT`;
}

export function isAdmin() {
    return (getCookie('admin') ?? 'false') === 'true';
}