import axios from 'axios';
import {useEffect, useState} from 'react';

//import {useSelector} from 'react-redux';
//import {RootState} from '../../../store/store';
import KanbanElement from '../KanbanElement/KanbanElement';

import './KanbanBody.scss';

interface IKanbanBodyProps {
  setIsActiveModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const elementList: string[] = ['backlog', 'process', 'done'];

const KanbanBody: React.FunctionComponent<IKanbanBodyProps> = ({setIsActiveModal}) => {
  const [tasks, setTasks] = useState<any>('2');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const data: object = {};
  //ВАЖНО КОРОЧЕ ПОПРОБУЙ ПОВТОРОИТЬ В ТОЧНОСТИ КАК У ULBI И ЕСЛИ ПОЛУЧИТСЯ ТО ПЕРЕДЕЛАЙ
  const getTasks = async () => {
    setIsLoading(true);
    try {
      const {data} = await axios.get('http://localhost:5000/get-tasks');
      setTasks(data);
      setIsError(false);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
      console.log('finally');
    }
  };
  useEffect(() => {
    getTasks();
  }, []);
  //const TicketsState = useSelector((state: RootState) => state.ticketList.ticketsList);
  //const tickets = list;

  if (isError) {
    return <div>Ошибка получения данных</div>;
  }
  if (isLoading) {
    return <div>Загружаются данные...</div>;
  }
  return (
    <div className="kanban-body">
      {tasks}
      {/* {elementList.map((item: string) => (
        <KanbanElement key={Date.now() + Math.random()} setIsActiveModal={setIsActiveModal} typeOfElement={item} tickets={tasks} />
      ))} */}
    </div>
  );
};

export default KanbanBody;
