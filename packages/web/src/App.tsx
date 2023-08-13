import { Dashboard } from './Dashboard';

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate
} from "react-router-dom";
import { SponsoredGasExample } from './modules/SponsoredGasExample';
import { BatchExample } from './modules/BatchExample';
import { TwitterMint } from './modules/TwitterMint';
import {YourContract} from "./modules/YourContract";
import {TestNRO} from "./modules/TestNRO";


const links = [
  { path: '/freemint', label: 'Free Mint', element: <TestNRO /> },
  { path: '/twitter-mint', label: 'Twitter NFTs', element: <TwitterMint /> },
  // { path: '/test', label: 'test', element: <YourContract /> },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard children={<Outlet />}
      links={links} />,
    errorElement: <Navigate to={'/'} replace />,
    children: [
      {
        index: true,
        element: <Navigate to={links[0].path} replace />
      },
      ...links
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
