import nativeCode from '../src/jwt/native';
import momentJs from '../src/jwt/moment-js';
import dayJs from '../src/jwt/day-js';

const date = new Date();

describe('Moment.js', () => {
    it('should return the same value as native code', () => {
        const nativeSolution = nativeCode.getExpirationTime(date);
        const momentSolution = momentJs.getExpirationTime(date);

        expect(nativeSolution).toEqual(momentSolution);
    });
})

describe('Day.js', () => {
    it('should return the same value as native code', () => {
        const nativeSolution = nativeCode.getExpirationTime(date);
        const daySolution = dayJs.getExpirationTime(date);

        expect(nativeSolution).toEqual(daySolution);
    });
})
