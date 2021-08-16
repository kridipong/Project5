import ReactDOM from 'react-dom';
import { StatusContextProvider } from './components/status-context';
import './index.css';
import App from './App';

ReactDOM.render(<StatusContextProvider><App /></StatusContextProvider>, document.getElementById('root'));
