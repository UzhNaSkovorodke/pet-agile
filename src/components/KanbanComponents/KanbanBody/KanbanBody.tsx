import axios from 'axios';
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import {RootState} from '../../../store/store';

import './KanbanBody.scss';

interface IKanbanBodyProps {
  setIsActiveModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const elementList: string[] = ['backlog', 'process', 'done'];

const KanbanBody: React.FunctionComponent<IKanbanBodyProps> = ({setIsActiveModal}) => {
  const [tasks, setTasks] = useState<any>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const data: object = {};

  const getTasks = async () => {
    setIsLoading(true);
    try {
      const {data} = await axios.get('http://localhost:5000/');
      setTasks(data);
      setIsError(false);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  const TicketsState = useSelector((state: RootState) => state.ticketList.ticketsList);
  console.log(TicketsState);

  if (isError) {
    return <div>Ошибка получения данных</div>;
  }
  if (isLoading) {
    return <div>Загружаются данные...</div>;
  } else return <div className="kanban-body"></div>;
};

export default KanbanBody;
