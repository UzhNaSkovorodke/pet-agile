import * as React from 'react';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {KanbanBody, KanbanHeader} from '../../components/KanbanComponents';
import Modal from '../../components/Modal/Modal';
import {addTicket, deleteTicket} from '../../store/TicketsSlice';
import ITicket from '../../store/interface/ITicket';
import type {RootState} from '../../store/store';

import './KanbanBoard.scss';

interface IKanbanBoardProps {}

const KanbanBoard: React.FunctionComponent<IKanbanBoardProps> = props => {
  const TicketsState = useSelector((state: RootState) => state.tickets);
  const dispatch = useDispatch();

  const [isActiveModal, setIsActiveModal] = useState<boolean>(false);
  const [idOfExistsTask, setIdOfExistsTask] = useState<number | null>(0);
  const [taskItem, setTaskItem] = useState<ITicket>({id: 0, title: '', description: '', type: 'backlog'});

  function changeTitleHandler(event: any) {
    const taskItemObj = {...taskItem};
    taskItemObj.title = event.target.value;
    setTaskItem(taskItemObj);
  }
  function changeDescriptionHandler(event: any) {
    const taskItemObj = {...taskItem};
    taskItemObj.description = event.target.value;
    setTaskItem(taskItemObj);
  }

  function taskCreator() {
    if (idOfExistsTask) {
      dispatch(deleteTicket(idOfExistsTask));
      dispatch(addTicket(taskItem));
      setIdOfExistsTask(null);
      setIsActiveModal(false);
    } else {
      dispatch(addTicket(taskItem));
      setIsActiveModal(false);
    }
  }

  return (
    <div>
      <div className="kanbanWrapper">
        <div className="kanban">
          <KanbanHeader />
          <KanbanBody
            setIsActiveModal={setIsActiveModal}
            TicketsState={TicketsState}
            setTaskItem={setTaskItem}
            setIdOfExistsTask={setIdOfExistsTask}
          />
          <Modal isActive={isActiveModal} setIsActive={setIsActiveModal}>
            <div>
              <div className="modal__input__wrapper">
                <input
                  type="text"
                  className="modal__input__title"
                  value={taskItem.title}
                  placeholder="Введите новый заголовок"
                  onChange={e => changeTitleHandler(e)}
                />
              </div>

              <div className="modal__input__wrapper">
                <input
                  type="text"
                  className="modal__input__description"
                  value={taskItem.description}
                  placeholder="Введите новое описание таски"
                  onChange={e => changeDescriptionHandler(e)}
                />
              </div>
              <button onClick={() => taskCreator()}>Добавить</button>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default KanbanBoard;
