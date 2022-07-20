import moment from 'moment';

export function getExpirationTime(date) {
    return moment.utc(date).add('10', 'seconds').unix();
}

export default {
    getExpirationTime,
}
