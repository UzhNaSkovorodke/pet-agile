import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {setHoldTask} from '../../store/slices/HoldTaskSlice';
import {addTicket, deleteTicket} from '../../store/slices/TicketListSlice';
import {RootState} from '../../store/store';
import BtnDanger from '../../ui/buttons/danger/BtnDanger';
import BtnPrimary from '../../ui/buttons/primary/BtnPrimary';
import InputCommon from '../../ui/input/common/InputCommon';

import styles from './FormKanbanTask.module.scss';

interface IKanbanFormTaskProps {
  setIsActiveModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const KanbanFormTask: React.FunctionComponent<IKanbanFormTaskProps> = ({setIsActiveModal}) => {
  const dispatch = useDispatch();
  const HoldTask = useSelector((state: RootState) => state.holdTask.holdTask);

  function changeTitleHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const taskItemObj = {...HoldTask};
    taskItemObj.title = event.target.value;
    dispatch(setHoldTask(taskItemObj));
  }
  function changeDescriptionHandler(event: React.ChangeEvent<HTMLInputElement>) {
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

        <p>Название задачи</p>
        <div className={styles.modal__input__wrapper}>
          <InputCommon placeholder="Введите заголовок" value={HoldTask.title} onChange={e => changeTitleHandler(e)} fontSize="h0" />
        </div>

        <p>Описание</p>
        <div className={styles.modal__input__wrapper}>
          <InputCommon
            placeholder="Введите новое описание"
            value={HoldTask.description}
            onChange={e => changeDescriptionHandler(e)}
            fontSize="h0"
          />
        </div>

        <div className={styles.modal__btnWrapper}>
          {HoldTask.id && (
            <BtnDanger fontSize="h1" buttonHandleFunc={() => taskRemove()}>
              Удалить
            </BtnDanger>
          )}

          <BtnPrimary fontSize="h1" buttonHandleFunc={() => taskCreator()}>
            Добавить
          </BtnPrimary>
        </div>
      </div>
    </div>
  );
};

export default KanbanFormTask;
