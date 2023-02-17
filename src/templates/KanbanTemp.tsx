import * as React from 'react';

import KanbanBoard from '../modules/KanbanBoard/KanbanBoard';
import Navigation from '../modules/Navigation/Navigation';

interface IKanbanTempProps {}

const KanbanTemp: React.FunctionComponent<IKanbanTempProps> = props => {
  return (
    <>
      <Navigation />
      <KanbanBoard />
    </>
  );
};

export default KanbanTemp;
