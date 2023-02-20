import * as React from 'react';
import {useState} from 'react';

import FormKanbanTask from '../../components/FormKanbanTask/FormKanbanTask';
import {KanbanBody, KanbanHeader} from '../../components/KanbanComponents';
import Modal from '../../components/Modal/Modal';

import './KanbanBoard.scss';

interface IKanbanBoardProps {}

const KanbanBoard: React.FunctionComponent<IKanbanBoardProps> = props => {
  const [isActiveModal, setIsActiveModal] = useState<boolean>(false);

  return (
    <div>
      <div className="kanbanWrapper">
        <div className="kanban">
          <KanbanHeader />
          <KanbanBody setIsActiveModal={setIsActiveModal} />
          <Modal isActive={isActiveModal} setIsActive={setIsActiveModal}>
            <FormKanbanTask setIsActiveModal={setIsActiveModal} />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default KanbanBoard;
