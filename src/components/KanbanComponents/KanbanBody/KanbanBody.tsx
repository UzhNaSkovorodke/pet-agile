import {useSelector} from 'react-redux';

import ITicket from '../../../store/interface/ITicket';
import {RootState} from '../../../store/store';
import KanbanElement from '../KanbanElement/KanbanElement';

import './KanbanBody.scss';

interface IKanbanBodyProps {
  setIsActiveModal: React.Dispatch<React.SetStateAction<boolean>>;
  setTaskItem: React.Dispatch<React.SetStateAction<ITicket>>;
  idOfExistsTask: number | null;
}

const elementList: string[] = ['backlog', 'process', 'done'];
const idOfExistsTask: number | null = 0;

const KanbanBody: React.FunctionComponent<IKanbanBodyProps> = ({setTaskItem, setIsActiveModal, idOfExistsTask}) => {
  const TicketsState = useSelector((state: RootState) => state.tickets);

  return (
    <div className="kanban-body">
      {elementList.map((item: string) => (
        <KanbanElement
          key={Date.now() + Math.random() * 10}
          idOfExistsTask={idOfExistsTask}
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
