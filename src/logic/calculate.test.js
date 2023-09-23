import calculate from './calculate';

describe('calculate function', () => {
  it('should handle "AC" button click', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  it('should handle "." button click', () => {
    // Add a decimal point to 'next'
    let result = calculate({ total: '10', next: '5', operation: '+' }, '.');
    expect(result).toEqual({ total: '10', next: '5.', operation: '+' });

    // Do not add multiple decimal points
    result = calculate({ total: '10', next: '5.7', operation: '-' }, '.');
    expect(result).toEqual({ total: '10', next: '5.7', operation: '-' });

    // Handle decimal point without 'next'
    result = calculate({ total: '10', next: null, operation: '+' }, '.');
    expect(result).toEqual({ total: '10', next: '0.', operation: '+' });
  });

  it('should handle "=" button click', () => {
    // Perform calculation when 'next' and 'operation' are present
    let result = calculate({ total: '10', next: '5', operation: '+' }, '=');
    expect(result).toEqual({ total: '15', next: null, operation: null });

    // Do nothing when 'next' and 'operation' are not present
    result = calculate({ total: '10', next: null, operation: null }, '=');
    expect(result).toEqual({});
  });

  it('should handle "+/-" button click', () => {
    // Negate 'next'
    let result = calculate({ total: '10', next: '5', operation: '+' }, '+/-');
    expect(result).toEqual({ total: '10', next: '-5', operation: '+' });

    // Negate 'total'
    result = calculate({ total: '10', next: null, operation: null }, '+/-');
    expect(result).toEqual({ total: '-10', next: null, operation: null });
  });

  it('should handle when there is a total, but next and operation are null', () => {
    const result = calculate({ total: '5', next: null, operation: null }, '+');
    expect(result).toEqual({ total: '5', next: null, operation: '+' });
  });

  it('should handle when there is a total and an operation, but next is null', () => {
    const result = calculate({ total: '5', next: null, operation: '+' }, '10');
    expect(result).toEqual({ total: '5', next: '10', operation: '+' });
  });

  it('should handle when total, next, and operation are all null and "5" button is pressed', () => {
    const initialState = { total: null, next: null, operation: null };
    const result = calculate(initialState, '5');

    // Expect "next" to be '5', "total" to be null, and "operation" to be undefined
    expect(result.next).toBe('5');
    expect(result.total).toBeNull();
    expect('operation' in result).toBe(false); // Check for the absence of the "operation" property
  });

  it('should handle when total is not null and operation is null, and the button is an operator', () => {
    const result = calculate({ total: '5', next: null, operation: null }, '+');
    expect(result).toEqual({ total: '5', next: null, operation: '+' });
  });

  it('should handle when total is not null, operation is not null, and the button is a number', () => {
    const result = calculate({ total: '5', next: null, operation: '+' }, '10');
    expect(result).toEqual({ total: '5', next: '10', operation: '+' });
  });
});
