import { Dashboard } from './Dashboard';

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate
} from "react-router-dom";
import { SponsoredGasExample } from './examples/SponsoredGasExample';
import { BatchExample } from './examples/BatchExample';
import { TwitterMint } from './examples/TwitterMint';
import {YourContract} from "./examples/YourContract";
import {TestNRO} from "./examples/TestNRO";


const links = [
  { path: '/bundle', label: 'Twitter Forever', element: <TwitterMint /> },
  { path: '/gas-free', label: 'Activities', element: <SponsoredGasExample /> },
  { path: '/test', label: 'test', element: <YourContract /> },
  { path: '/test-freemint', label: 'freemint', element: <TestNRO /> },

  // { path: '/bundle', label: 'Bundle Transactions', element: <BatchExample /> },

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
