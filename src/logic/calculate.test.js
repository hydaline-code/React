import calculate from './calculate';

describe('calculate', () => {
  it('should handle AC button', () => {
    const result = calculate({ total: '10', next: '53', operation: '+' }, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  it('should handle numeric button presses', () => {
    const result = calculate({ total: '10', next: '53', operation: '+' }, '5');
    expect(result).toEqual({ total: '10', next: '535', operation: '+' });
  });

  it('should handle decimal button', () => {
    const result = calculate({ total: '10', next: '53', operation: '+' }, '.');
    expect(result).toEqual({ total: '10', next: '53.', operation: '+' });
  });

  it('should handle equals button', () => {
    const result = calculate({ total: '10', next: '53', operation: '+' }, '=');
    expect(result).toEqual({ total: '63', next: null, operation: null });
  });
});
