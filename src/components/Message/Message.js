
function Message() {
    return (
        <div className="w-full my-2 flex justify-end">
            <div className="bg-stone-50 white  mx-2 rounded-md px-2 w-4/6  shadow-sm">
              <div className=" flex flex-col justify-start">
                <p className="text-sm font-bold">
                  Instalacion
                </p>
                <div className="flex w-full">
                  <p className="w-full text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                    officia deserunt mollit anim id est laborum
                  </p>                  
                </div>
                <div className="my-1 flex justify-end text-stone-400 text-xs" >
                  <p>
                    14:35pm
                  </p>
                </div>
              </div>
            </div>
        </div>
            
    );
  }
  
  export default Message;
  