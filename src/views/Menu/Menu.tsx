import Chat from "../../features/chat/Chat";
import Sidebar from "../../features/sidebar/Sidebar";

function Menu() {
    return (
      <div className="h-screen flex flex-row">
          <div className="basis-1/3">
            <Sidebar/>
          </div>
          <div className="basis-2/3">
            <Chat/>
          </div>
      </div>
    );
  }
  
  export default Menu;
  