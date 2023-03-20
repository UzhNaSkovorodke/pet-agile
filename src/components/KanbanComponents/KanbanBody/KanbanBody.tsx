import {useSelector} from 'react-redux';

import {RootState} from '../../../store/store';
import KanbanElement from '../KanbanElement/KanbanElement';

import './KanbanBody.scss';
import list from './helper';

interface IKanbanBodyProps {
  setIsActiveModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const elementList: string[] = ['backlog', 'process', 'done'];
const KanbanBody: React.FunctionComponent<IKanbanBodyProps> = ({setIsActiveModal}) => {
  const TicketsState = useSelector((state: RootState) => state.ticketList.ticketsList);
  //const TicketsState = list;
  return (
    <div className="kanban-body">
      {elementList.map((item: string) => (
        <KanbanElement
          key={Date.now() + Math.random() * 10}
          setIsActiveModal={setIsActiveModal}
          typeOfElement={item}
          TicketsState={TicketsState}
        />
      ))}
    </div>
  );
};

export default KanbanBody;
