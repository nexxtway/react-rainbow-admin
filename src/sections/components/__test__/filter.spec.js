import filter from '../filter';

const arrayToFilter = [{ data: { 'component-name': [{ text: 'Accordion' }] } }];
const arrayWithInvalidCharacter = ['*', '[', ']', '^', '\\'];
const itemNotMatch = 'Card';

describe('filter function in components page', () => {
    it('should return an empty array when an item filtered not match', () => {
        expect(filter(itemNotMatch, arrayToFilter)).toEqual([]);
    });
    it('should return the same array if the character to filter is invalid', () => {
        arrayWithInvalidCharacter.forEach((character) => {
            expect(filter(character, arrayToFilter)).toEqual(arrayToFilter);
        });
    });
});
