import { Route, Routes } from 'react-router';
import './App.css';
import { Login } from './component/login';
import { Registration } from './component/registration';
import { useState } from 'react';
import { Student } from './component/student';
import { Quiz } from './component/student/quiz';

function App() {

  const [loggedInUser, setLoggedInUser] = useState(null)

  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Login setLoggedInUser={setLoggedInUser} />} />
        <Route path="/registration" exact element={<Registration />} />
        <Route path="/student" exact element={<Student />} />
        <Route path="/quiz" exact element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;
