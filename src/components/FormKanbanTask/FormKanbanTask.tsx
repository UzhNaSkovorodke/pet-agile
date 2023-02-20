import * as React from 'react';
import {useDispatch} from 'react-redux';

import {addTicket, deleteTicket} from '../../store/TicketsSlice';

import styles from './FormKanbanTask.module.scss';

interface IKanbanFormTaskProps {
  taskItem: any;
  setTaskItem: any;
  setIsActiveModal: any;
  idOfExistsTask: any;
  setIdOfExistsTask: any;
}

const KanbanFormTask: React.FunctionComponent<IKanbanFormTaskProps> = ({
  taskItem,
  setTaskItem,
  idOfExistsTask,
  setIsActiveModal,
  setIdOfExistsTask
}) => {
  const dispatch = useDispatch();

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
    console.log(idOfExistsTask);
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

  function taskDelete() {
    console.log(idOfExistsTask);
    if (idOfExistsTask) {
      dispatch(deleteTicket(idOfExistsTask));
      setIdOfExistsTask(null);
      setIsActiveModal(false);
    }
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modalWrapper}>
        <div className={styles.modal__exit}>
          <button onClick={() => setIsActiveModal(false)}>X</button>
        </div>
        <div className={styles.modal__input__wrapper}>
          <p>Название задачи</p>
          <input
            type="text"
            className={styles.modal__input__title}
            value={taskItem.title}
            placeholder="Введите новый заголовок"
            onChange={e => changeTitleHandler(e)}
          />
        </div>

        <div className={styles.modal__input__wrapper}>
          <p>Описание</p>
          <input
            type="text"
            className={styles.modal__input__description}
            value={taskItem.description}
            placeholder="Введите новое описание таски"
            onChange={e => changeDescriptionHandler(e)}
          />
        </div>
        <div className={styles.modal__btnWrapper}>
          <button className={styles.modal__btn} onClick={() => taskCreator()}>
            {idOfExistsTask ? 'Изменить' : 'Добавить'}
          </button>
          <button className={styles.modal__btn_del} onClick={() => taskDelete()}>
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
};

export default KanbanFormTask;
