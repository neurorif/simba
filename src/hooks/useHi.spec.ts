import useHi from './useHi';
import {renderHook} from '@testing-library/react-native';
import {expect, it} from '@jest/globals';

describe('useHi', () => {
  it('it says hi', () => {
    const {result} = renderHook(() => useHi());
    expect(result.current).toBe('Hi!');
  });
});
