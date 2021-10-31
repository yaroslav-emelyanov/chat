import { useCallback, useState } from 'react';

export const useFlag = (defaultValue = false) => {
  const [state, setState] = useState(defaultValue);

  const setTrue = useCallback(() => setState(true), []);

  const setFalse = useCallback(() => setState(false), []);

  return [state, setTrue, setFalse] as const;
};
