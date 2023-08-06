// usePersistentState.js
import { useEffect, useState } from "react";

export default function usePersistentState(key, initialValue) {
  const [state, setInternalState] = useState(() => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  const setState = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    setInternalState(value);
  };

  return [state, setState];
}
