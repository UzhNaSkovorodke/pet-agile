import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';

import './index.css';
import Kanban from './layout/Kanban/Kanban';
import KanbanNew from './layout/KanbanNew/KanbanNew';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Kanban />
  },
  {
    path: '/new',
    element: <KanbanNew />
  }
]);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<RouterProvider router={router} />);
