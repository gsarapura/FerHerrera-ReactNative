import {useState} from 'react';

export const useForm = <T extends Object>(credentials: T) => {
  const [state, setState] = useState(credentials);

  const onChange = (value: string, campo: keyof T) => {
    setState({
      ...state,
      [campo]: value,
    });
  };
  return {
    ...state,
    state,
    onChange,
  };
};
