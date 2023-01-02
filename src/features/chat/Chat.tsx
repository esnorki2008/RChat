import Button from "../button/Button";
import Input from "../input/Input";
import Message from "../message/Message";

function Chat() {
  return (
    <div className="bg-zinc-700 shadow-xs h-full 
        flex flex-col  text-md 
        justify-end ">
        <div className="bg-zinc-900 shadow-sm py-2 px-4 h-full h-100 overflow-y-scroll scrollbar:!w-1.5 scrollbar:!h-1.5 
                scrollbar:bg-transparent scrollbar-track:!bg-cyan-900 scrollbar-thumb:!rounded scrollbar-thumb:!bg-cyan-50 scrollbar-track:!rounded
                overflow-y-scroll bg-zinc-800 shadow border-zinc-900 border-r p-2 h-100">
          <div className="flex flex-col items-end justify-end ">
            <Message/>
            <Message/>  
            <Message/>  
          </div>
        </div>
        <div className="flex justify-center w-full py-8">
          <Input />
          <div className="flex flex-col content-center justify-center " >
            <Button />
          </div> 
        </div>
    </div>
  );
}

export default Chat;
