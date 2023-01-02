import { useAppDispatch } from './app/hooks';
import Chat from './features/chat/Chat';
//import { Counter } from './features/counter/Counter';
import {setSession} from './reducers/sessionSlice'



function App() {
  const dispatch = useAppDispatch();
  dispatch(setSession("hola"))
  //<Counter />
  return (
    <div className="h-screen">
      <Chat/>
    </div>
  );
}

export default App;
