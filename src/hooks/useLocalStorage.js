import { useState, useEffect } from 'react';

export default function useLocalStorage(key) {
  const [state, setState] = useState([]);

  useEffect(() => {
    try {
      const savedData = JSON.parse(window.localStorage.getItem(key));
      const condition = Array.isArray(savedData);

      if (condition) {
        setState([...savedData]);
      }
    } catch (error) {
      console.error(
        'LS_PARSE_ERROR_MESSAGE',
        window.localStorage.setItem(key, JSON.stringify([])),
      );
    }
  }, [key]);

  useEffect(() => {
    if (state.length > 0) {
      window.localStorage.setItem(key, JSON.stringify(state));
    }
  }, [key, state]);

  return [state, setState];
}
