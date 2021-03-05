import React, { createContext, ReactNode, useContext, useState } from 'react';

interface ICounterContext {
  counter: number;
  increment: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  decrement: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

interface ICounterProviderProps {
  children: ReactNode;
}

const CounterContext = createContext<Partial<ICounterContext>>({});

function CounterProvider({ children }: ICounterProviderProps) {
  const [counter, setCounter] = useState<number>(0);
  const increment = () => setCounter((state) => state + 1);
  const decrement = () => setCounter((state) => state - 1);
  return (
    <CounterContext.Provider value={{ counter, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
}

export function useCounter() {
  const { counter, increment, decrement } = useContext(CounterContext);
  return { counter, increment, decrement };
}

export default CounterProvider;
