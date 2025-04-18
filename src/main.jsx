
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import UserContext from './pages/UserContext.jsx';

createRoot(document.getElementById('root')).render(
    <UserContext>
     <App/>
    </UserContext>

)

