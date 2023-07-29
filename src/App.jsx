import { Route, Routes } from 'react-router';
import './App.css';
import { Login } from './component/login';
import { Registration } from './component/registration';
import { useEffect, useState } from 'react';
import { Student } from './component/student';
import { Quiz } from './component/student/quiz';
import { Profile } from './component/student/profile';
import { Header } from './component/header';

function App() {

  const [loggedInUser, setLoggedInUser] = useState(JSON.parse(window.localStorage.getItem('LOGGED_IN_USER')))
  useEffect(() => {
    window.localStorage.setItem('LOGGED_IN_USER', JSON.stringify(loggedInUser))
  }, [loggedInUser])

  return (
    <div className="App">
      {
        loggedInUser ? <Header loggedInUser={loggedInUser} /> : null
      }
      <Routes>
        <Route
          path="/"
          exact
          element={
            loggedInUser
            ? <Student />
            : <Login setLoggedInUser={setLoggedInUser} />
          }
        />
        <Route path="/registration" exact element={<Registration />} />
        <Route path="/profile" exact element={<Profile loggedInUser={loggedInUser} />} />
        <Route path="/quiz" exact element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;
