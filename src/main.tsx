import ReactDOM from 'react-dom/client';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';

import Kanban from './components/Kanban/Kanban';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Kanban />
  }
]);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<RouterProvider router={router} />);
