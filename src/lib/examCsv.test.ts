import { describe, it, expect } from 'vitest';
import { computeResult, parseCsv, toCsv } from './examCsv';

describe('pass rule', () => {
  it('passes at exactly the passing score (70%)', () => {
    expect(computeResult(5, 2, 10, 70).passed).toBe(true);
  });
  it('fails just below the passing score', () => {
    expect(computeResult(5, 1.9, 10, 70).passed).toBe(false);
  });
  it('uses an adjusted passing score', () => {
    expect(computeResult(7, 0, 10, 80).passed).toBe(false);
  });
});

describe('csv', () => {
  it('round-trips commas, quotes and newlines', () => {
    const csv = toCsv([{ a: 'x, "y"\nz', b: 1 }], ['a', 'b']);
    expect(parseCsv(csv)).toEqual([{ a: 'x, "y"\nz', b: '1' }]);
  });
});
