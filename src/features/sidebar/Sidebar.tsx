import ChatSelector from "../chat-selector/ChatSelector";

function Sidebar() {
    return (
        <div className="scrollbar:!w-1.5 scrollbar:!h-1.5 
                scrollbar:bg-transparent scrollbar-track:!bg-cyan-900 scrollbar-thumb:!rounded scrollbar-thumb:!bg-cyan-50 scrollbar-track:!rounded
                overflow-y-scroll bg-zinc-800 shadow h-full border-zinc-900 border-r p-2 h-100">
            <ChatSelector/>
            <ChatSelector/>
            <ChatSelector/>
            <ChatSelector/>
            <ChatSelector/>
            <ChatSelector/>
            <ChatSelector/>
            <ChatSelector/>
        </div>
    );
  }
  
  export default Sidebar;
  