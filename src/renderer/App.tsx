import { Button } from '@mui/material';
import {
  MemoryRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import Components from './src/components';
import icon from '../../assets/icon.svg';
import './App.css';

const Hello = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <div className="Hello">
        <Button onClick={() => navigate('/manage')} variant="contained">
          Quản lý sân bóng
        </Button>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/manage" element={<Components />} />
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
