import * as React from 'react';
import {useSelector} from 'react-redux';

import {KanbanBody, KanbanHeader} from '../../components/KanbanComponents';
import type {RootState} from '../../store/store';

import './KanbanBoard.scss';

interface IKanbanBoardProps {
  setIsActiveModal: any;
}

const KanbanBoard: React.FunctionComponent<IKanbanBoardProps> = ({setIsActiveModal}) => {
  const TicketsState = useSelector((state: RootState) => state.tickets);

  return (
    <div>
      <div className="kanbanWrapper">
        <div className="kanban">
          <KanbanHeader />
          <KanbanBody setIsActiveModal={setIsActiveModal} TicketsState={TicketsState} />
        </div>
      </div>
    </div>
  );
};

export default KanbanBoard;
