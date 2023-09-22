import calculate from './calculate';

describe('calculate function', () => {
  it('should handle "AC" button click', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  it('should handle number button clicks', () => {
    // Add a digit to 'next' when there's no operation
    let result = calculate({ total: '10', next: null, operation: null }, '5');
    expect(result).toEqual({ total: '10', next: '5', operation: null });

    // Append digits to 'next' when there's an operation
    result = calculate({ total: '10', next: '5', operation: '+' }, '2');
    expect(result).toEqual({ total: '10', next: '52', operation: '+' });

    // Handle '0' button click
    result = calculate({ total: '10', next: '0', operation: '+' }, '0');
    expect(result).toEqual({});
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

  it('should handle operation button clicks', () => {
    // Start an operation when 'next' is present
    let result = calculate({ total: '10', next: '5', operation: '+' }, '-');
    expect(result).toEqual({ total: '15', next: null, operation: '-' });

    // Change the operation when 'next' and 'operation' are present
    result = calculate({ total: '10', next: '5', operation: '+' }, 'x');
    expect(result).toEqual({ total: '15', next: null, operation: 'x' });

    // Do nothing when there's no 'next'
    result = calculate({ total: '10', next: null, operation: null }, 'x');
    expect(result).toEqual({});
  });

  it('should handle when total, next, and operation are all null', () => {
    const result = calculate({ total: null, next: null, operation: null }, '5');
    expect(result).toEqual({ total: null, next: '5', operation: null });
  });

  it('should handle when there is a total, but next and operation are null', () => {
    const result = calculate({ total: '5', next: null, operation: null }, '+');
    expect(result).toEqual({ total: '5', next: null, operation: '+' });
  });

  it('should handle when there is a total and an operation, but next is null', () => {
    const result = calculate({ total: '5', next: null, operation: '+' }, '10');
    expect(result).toEqual({ total: '5', next: '10', operation: '+' });
  });
});
