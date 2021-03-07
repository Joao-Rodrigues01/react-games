import { SelectHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

export default function Select({ label, name, options, ...rest} : SelectProps) {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(()=> {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'value',
    })
  },[selectRef, registerField]);

  return (
      <Container>
          <label htmlFor={name}>{label}</label>
          <select
            ref={selectRef}
            id={name}
            defaultValue={defaultValue}
            {...rest}
          >
            {options.map((option) => {
              return (
                <option key={option.value} value={option.value}>
                  {`${option.label}`}
                </option>
              )
            })}
          </select>
      </Container>
  )
}

