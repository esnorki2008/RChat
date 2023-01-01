import Button from "../Button/Button";
import Input from "../Input/Input";
import Message from "../Message/Message";

function Chat() {
  return (
    <div className="bg-stone-50 shadow-xs h-full 
        flex flex-col rounded-xl text-md 
        justify-end">
        <div className="bg-stone-200 shadow-sm py-2 px-4 h-full ">
          <div className="flex flex-col items-end justify-end">
            <Message/>
            <Message/>  
          </div>
        </div>
        <div className="flex justify-center w-full py-8">
          <Input />
          <div className="flex flex-col content-center justify-center " >
            <Button className=""/>
          </div> 
        </div>
    </div>
  );
}

export default Chat;
