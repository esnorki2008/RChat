import { useAppDispatch } from './app/hooks';
//import { Counter } from './features/counter/Counter';
import {setSession} from './reducers/sessionSlice'
import Menu from './views/Menu/Menu';



function App() {
  const dispatch = useAppDispatch();
  dispatch(setSession("hola"))
  //<Counter />
  return (
    <div >
      <Menu/>
    </div>
  );
}

export default App;
