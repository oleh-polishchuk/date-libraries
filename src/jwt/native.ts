export function getExpirationTime(date) {
    return Math.floor(date.valueOf() / 1000) + 10;
}

export default {
    getExpirationTime,
}
