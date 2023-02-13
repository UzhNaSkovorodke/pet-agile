import * as React from 'react';
import {useState} from 'react';

import Modal from '../components/Modal/Modal';
import KanbanBoard from '../modules/KanbanBoard/KanbanBoard';
import Navigation from '../modules/Navigation/Navigation';

interface IKanbanTempProps {}

const KanbanTemp: React.FunctionComponent<IKanbanTempProps> = props => {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <>
      <Navigation />
      <KanbanBoard setIsActiveModal={setIsActive} />
      <Modal isActive={isActive} setIsActive={setIsActive} />
    </>
  );
};

export default KanbanTemp;
