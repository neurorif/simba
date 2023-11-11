import useHi from './useHi';
import {renderHook} from '@testing-library/react-native';

test('it says hi', () => {
  const {result} = renderHook(() => useHi());
  expect(result.current).toBe('Hi!');
});
