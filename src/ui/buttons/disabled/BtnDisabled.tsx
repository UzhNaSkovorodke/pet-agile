import * as React from 'react';

import '../Btn.scss';
import {IButton} from '../InterfaceButton';

const BtnDisabled: React.FunctionComponent<IButton> = ({children, fontSize, buttonHandleFunc}) => {
  return (
    <button type="button" className={`btn disabled ${fontSize}`} onClick={buttonHandleFunc}>
      {children}
    </button>
  );
};

export default BtnDisabled;
