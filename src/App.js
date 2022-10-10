import { useSelector } from 'react-redux';
import './App.css';
import CardItem from './components/Card';

function App() {
  const myFriends = useSelector((state) => state.friendsReducer.friends)

  return (
    <div className="App">
      
      <div className='cards'>
          {myFriends.map((friend) => {
            return <CardItem key={friend.id} title={friend.name} description={friend.description} img={friend.img}/>
          })}
      </div>

    </div>
  );
}

export default App;
