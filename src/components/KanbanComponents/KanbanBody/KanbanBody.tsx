import axios from 'axios';
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import ITicket from '../../../store/interface/ITicket';
import {RootState} from '../../../store/store';
import KanbanElement from '../KanbanElement/KanbanElement';

import './KanbanBody.scss';

interface IKanbanBodyProps {
  setIsActiveModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const elementList: string[] = ['backlog', 'process', 'done'];
const data: any = {};
const KanbanBody: React.FunctionComponent<IKanbanBodyProps> = ({setIsActiveModal}) => {
  //const TicketsState = useSelector((state: RootState) => state.ticketList);

  const src = 'https://jsonplaceholder.typicode.com/todos';

  const [posts, setPosts] = useState<object[]>();
  const [tickets, setTickets] = useState<ITicket[]>();

  async function fetchPosts() {
    try {
      const {data} = await axios.get(src);
      setPosts(data);
    } catch {
    } finally {
      console.log('запрос сделан');
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="kanban-body">
      {elementList.map((item: string) => (
        <KanbanElement
          key={Date.now() + Math.random() * 10}
          setIsActiveModal={setIsActiveModal}
          typeOfElement={item}
          TicketsState={tickets}
        />
      ))}
    </div>
  );
};

export default KanbanBody;
