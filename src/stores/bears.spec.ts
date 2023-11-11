import {renderHook} from '@testing-library/react-native';
import {useBearStore} from './bears';
import {act} from 'react-test-renderer';
import {describe, it, expect} from '@jest/globals';

describe('useBearStore', () => {
  it('output zero bear at first', () => {
    const {result} = renderHook(() => useBearStore());
    expect(result.current.bears).toBe(0);
  });

  it('add bears if asked', () => {
    const {result} = renderHook(() => useBearStore());
    act(() => {
      result.current.increase(1);
    });
    act(() => {
      result.current.increase(3);
    });
    expect(result.current.bears).toBe(4);
  });
});
