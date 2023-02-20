import {useSelector} from 'react-redux';

import ITicket from '../../../store/interface/ITicket';
import {RootState} from '../../../store/store';
import KanbanElement from '../KanbanElement/KanbanElement';

import './KanbanBody.scss';

interface IKanbanBodyProps {
  setIsActiveModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIdOfExistsTask: React.Dispatch<React.SetStateAction<number | null>>;
  setTaskItem: React.Dispatch<React.SetStateAction<ITicket>>;
}
const elementList: string[] = ['backlog', 'process', 'done'];
const KanbanBody: React.FunctionComponent<IKanbanBodyProps> = ({setTaskItem, setIsActiveModal, setIdOfExistsTask}) => {
  const TicketsState = useSelector((state: RootState) => state.tickets);
  console.log('<KanbanBody/> render');
  return (
    <div className="kanban-body">
      {elementList.map((item: string) => (
        <KanbanElement
          key={Date.now() + Math.random() * 10}
          setIdOfExistsTask={setIdOfExistsTask}
          setIsActiveModal={setIsActiveModal}
          setTaskItem={setTaskItem}
          typeOfElement={item}
          TicketsState={TicketsState}
        />
      ))}
    </div>
  );
};

export default KanbanBody;
