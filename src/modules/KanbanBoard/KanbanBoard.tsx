import * as React from 'react';
import {useState} from 'react';

import FormKanbanTask from '../../components/FormKanbanTask/FormKanbanTask';
import {KanbanBody, KanbanHeader} from '../../components/KanbanComponents';
import Modal from '../../components/Modal/Modal';
import ITicket from '../../store/interface/ITicket';

import './KanbanBoard.scss';

interface IKanbanBoardProps {}

const KanbanBoard: React.FunctionComponent<IKanbanBoardProps> = props => {
  const [isActiveModal, setIsActiveModal] = useState<boolean>(false);

  const [idOfExistsTask, setIdOfExistsTask] = useState<number | null>(null);
  const [taskItem, setTaskItem] = useState<ITicket>({id: 0, title: '', description: '', type: 'backlog'});

  return (
    <div>
      <div className="kanbanWrapper">
        <div className="kanban">
          <KanbanHeader />
          <KanbanBody
            setIsActiveModal={setIsActiveModal}
            setTaskItem={setTaskItem}
            setIdOfExistsTask={setIdOfExistsTask}
          />
          <Modal isActive={isActiveModal} setIsActive={setIsActiveModal}>
            <FormKanbanTask
              setTaskItem={setTaskItem}
              taskItem={taskItem}
              setIdOfExistsTask={setIdOfExistsTask}
              idOfExistsTask={idOfExistsTask}
              setIsActiveModal={setIsActiveModal}
            />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default KanbanBoard;
