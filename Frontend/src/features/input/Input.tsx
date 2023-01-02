function Input() {
    return (
      <div className=" flex-col w-2/4">
          <input 
              type="text" 
              id="first_name" 
              className="bg-zinc-800  border border-zinc-900 text-zinc-900 text-sm text-zinc-50  w-full p-2.5 " 
              placeholder="Ingresar Mensaje" 
              required/>
      </div>
    );
  }
  
  export default Input;
  