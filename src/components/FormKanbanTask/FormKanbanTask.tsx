import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {setHoldTask} from '../../store/slices/HoldTaskSlice';
import {addTicket, deleteTicket} from '../../store/slices/TicketListSlice';
import {RootState} from '../../store/store';
import BtnDanger from '../../ui/buttons/danger/BtnDanger';
import BtnPrimary from '../../ui/buttons/primary/BtnPrimary';

import styles from './FormKanbanTask.module.scss';

interface IKanbanFormTaskProps {
  setIsActiveModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const KanbanFormTask: React.FunctionComponent<IKanbanFormTaskProps> = ({setIsActiveModal}) => {
  const dispatch = useDispatch();
  const HoldTask = useSelector((state: RootState) => state.holdTask.holdTask);
  const TicketsState = useSelector((state: RootState) => state.ticketList);

  function changeTitleHandler(event: any) {
    const taskItemObj = {...HoldTask};
    taskItemObj.title = event.target.value;
    dispatch(setHoldTask(taskItemObj));
  }
  function changeDescriptionHandler(event: any) {
    const taskItemObj = {...HoldTask};
    taskItemObj.description = event.target.value;
    dispatch(setHoldTask(taskItemObj));
  }

  function taskCreator() {
    {
      dispatch(deleteTicket(HoldTask.id));
      dispatch(addTicket(HoldTask));
      setIsActiveModal(false);
    }
  }

  function taskRemove() {
    dispatch(deleteTicket(HoldTask.id));
    setIsActiveModal(false);
  }
  return (
    <div className={styles.modal}>
      <div className={styles.modalWrapper}>
        <div className={styles.modal__exit}>
          <BtnDanger fontSize="h1" buttonHandleFunc={() => setIsActiveModal(false)}>
            X
          </BtnDanger>
        </div>

        <div className={styles.modal__input__wrapper}>
          <p>Название задачи</p>
          <input
            type="text"
            className={styles.modal__input__title}
            value={HoldTask.title}
            placeholder="Введите новый заголовок"
            onChange={e => changeTitleHandler(e)}
          />
        </div>

        <div className={styles.modal__input__wrapper}>
          <p>Описание</p>
          <input
            type="text"
            className={styles.modal__input__description}
            value={HoldTask.description}
            placeholder="Введите новое описание таски"
            onChange={e => changeDescriptionHandler(e)}
          />
        </div>

        <div className={styles.modal__btnWrapper}>
          {HoldTask.id ? (
            <BtnPrimary fontSize="h1" buttonHandleFunc={() => taskRemove()}>
              Удалить
            </BtnPrimary>
          ) : (
            ''
          )}

          <BtnPrimary fontSize="h1" buttonHandleFunc={() => taskCreator()}>
            {TicketsState.ticketsList.includes(HoldTask) ? 'Изменить' : 'Добавить'}
          </BtnPrimary>
        </div>
      </div>
    </div>
  );
};

export default KanbanFormTask;
