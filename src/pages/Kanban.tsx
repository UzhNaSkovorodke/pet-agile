import * as React from 'react';

import KanbanBoard from '../modules/KanbanBoard/KanbanBoard';
import Navigation from '../modules/Navigation/Navigation';

interface IKanbanProps {}

const Kanban: React.FunctionComponent<IKanbanProps> = props => {
  return (
    <>
      <Navigation />
      <KanbanBoard />
    </>
  );
};

export default Kanban;
