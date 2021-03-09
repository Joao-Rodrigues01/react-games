import { InputHTMLAttributes, ReactNode, useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Input } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  children: ReactNode;
}

export default function SearchBar({ name, children,...rest }: InputProps) {
  const inpuRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inpuRef.current,
      path: 'value',
    });
  }, [inpuRef, registerField]);

  return (
      <Input>
        {children}
        <input 
          ref={inpuRef} 
          id={name}
          defaultValue={defaultValue} 
          type="text" 
          placeholder="Search game titles"
          {...rest}
        />
      </Input>
  )
}