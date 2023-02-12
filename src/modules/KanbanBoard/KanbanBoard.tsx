import * as React from 'react';
import {useSelector} from 'react-redux';

import {KanbanBody, KanbanHeader} from '../../components/KanbanComponents';
import type {RootState} from '../../store/store';

import './KanbanBoard.scss';

interface IKanbanBoardProps {}

const KanbanBoard: React.FunctionComponent<IKanbanBoardProps> = props => {
  const TicketsState = useSelector((state: RootState) => state.tickets);

  return (
    <div className="kanbanWrapper">
      <div className="kanban">
        <KanbanHeader />
        <KanbanBody TicketsState={TicketsState} />
      </div>
    </div>
  );
};

export default KanbanBoard;
