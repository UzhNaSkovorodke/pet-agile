import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

interface IPortalProps {
  children: any;
}

const Portal: React.FunctionComponent<IPortalProps> = ({children}) => {
  const [container] = useState(() => document.createElement('div'));

  useEffect(() => {
    document.body.appendChild(container); //добавляет узел в конец списка дочерних элементов, чтобы если вставили несколько div то последний был поверх предыдущего
    return () => {
      document.body.removeChild(container);
    };
  }, []);

  return ReactDOM.createPortal(children, container);
};

export default Portal;
