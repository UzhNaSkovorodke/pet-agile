import * as React from 'react';

import '../Input.scss';

interface IInputCommonProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  fontSize: string;
}

const InputCommon: React.FunctionComponent<IInputCommonProps> = ({value, placeholder, fontSize, onChange}) => {
  return (
    <input type="text" className={`input ${fontSize}`} value={value} placeholder={placeholder} onChange={onChange} />
  );
};

export default InputCommon;
