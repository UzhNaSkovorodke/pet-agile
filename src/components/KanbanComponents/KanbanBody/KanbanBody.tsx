import {useSelector} from 'react-redux';

import {RootState} from '../../../store/store';
import KanbanElement from '../KanbanElement/KanbanElement';

import './KanbanBody.scss';

interface IKanbanBodyProps {
  setIsActiveModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const KanbanBody: React.FunctionComponent<IKanbanBodyProps> = ({setIsActiveModal}) => {
  const ticketElements = useSelector((state: RootState) => state.ticketState.ticketList);

  return (
    <div className="kanban-body">
      {ticketElements.map((item: any) => (
        <KanbanElement
          key={Date.now() + Math.random() * 10}
          setIsActiveModal={setIsActiveModal}
          ticketList={item.items}
          typeOfElement={item.title}
        />
      ))}
    </div>
  );
};

export default KanbanBody;
