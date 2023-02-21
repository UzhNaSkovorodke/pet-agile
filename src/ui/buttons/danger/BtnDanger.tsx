import * as React from 'react';

import '../Btn.scss';
import {IButton} from '../InterfaceButton';

const BtnDanger: React.FunctionComponent<IButton> = ({children, fontSize, buttonHandleFunc}) => {
  return (
    <button type="button" className={`btn danger ${fontSize}`} onClick={buttonHandleFunc}>
      {children}
    </button>
  );
};

export default BtnDanger;
