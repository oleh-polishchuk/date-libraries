import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

export function getExpirationTime(date) {
    return dayjs(date).utc().add(10, 'second').unix();
}

export default {
    getExpirationTime,
}
