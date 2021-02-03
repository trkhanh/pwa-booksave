import randomBackground from '../libs/randomBackground.js';

describe('randomBackground', () => {
    it('should include an array', () => {
        expect(Array.isArray(randomBackground)).toEqual(true);
    });
});