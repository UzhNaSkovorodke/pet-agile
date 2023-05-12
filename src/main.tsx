import ReactDOM from 'react-dom/client';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';

import './index.css';
import Kanban from './layout/Kanban/Kanban';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Kanban />
  }
]);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<RouterProvider router={router} />);
