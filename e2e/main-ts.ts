import { strict as assert } from 'assert';
import numberfmt from '@tuplo/numberfmt';

const result = numberfmt(123456, '0,0.00');

export const testNumberfmt = numberfmt;

assert.equal(result, '123,456.00');
