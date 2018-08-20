import parseLaravelDate from '../dist/parseLaravelDate';

describe('Parse laravel date', () => {
  test('Should return a valid date when passed a laravel date/time string', () => {
    const input = '1991-09-27 04:23:19';
    const output = parseLaravelDate(input);
    expect(output instanceof Date).toBeTruthy();
    expect(Number.isNaN(output.getTime())).toBeFalsy();
    expect(output.getFullYear()).toEqual(1991);
    expect(output.getMonth()).toEqual(8);
    expect(output.getDate()).toEqual(27);
    expect(output.getHours()).toEqual(4);
    expect(output.getMinutes()).toEqual(23);
    expect(output.getSeconds()).toEqual(19);
  });
});
