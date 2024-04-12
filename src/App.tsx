import Login from './auth/login';

import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes,
} from 'react-router-dom';
import { ThemeProvider } from './context/Darktheme';
import { RootLayout } from './pages/RootLayout';
import Dashboard from './components/dashboard/Dashboard';
import { QueryProvider } from './lib/react-query/QueryClient';
export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <QueryProvider>
          <div className="outer w-full flex flex-row">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="" element={<RootLayout />}>
                <Route path="/" index element={<Dashboard />} />
                <Route path="/all-users" index element={<Dashboard />} />
              </Route>

              {/* </div> */}
              {/* <SidebarNav /> */}
              {/* <Dashboard/> */}
            </Routes>
          </div>
        </QueryProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
