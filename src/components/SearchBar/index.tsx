import { InputHTMLAttributes, useEffect, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useField } from '@unform/core';

import { Input } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export default function SearchBar({ name, ...rest }: InputProps) {
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
        <FaSearch size={14} color="#B9B9C4"/>
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