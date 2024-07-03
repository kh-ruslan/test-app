import { Dispatch, SetStateAction, createContext } from 'react';

interface LoginContextType {
  userEmail: string;
  setUserEmail: Dispatch<SetStateAction<string>>;
}

const LoginContext = createContext<LoginContextType>({
  userEmail: '',
  setUserEmail: () => {},
});

export default LoginContext;
