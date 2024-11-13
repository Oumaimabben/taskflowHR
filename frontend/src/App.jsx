import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import Dashboard from './pages/dashboard';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout Route with Nested Routes */}
        <Route path="/" element={<Layout/>}>
        <Route index element={<Dashboard />} />

        </Route>
        {/* Separate Route for Login */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;



