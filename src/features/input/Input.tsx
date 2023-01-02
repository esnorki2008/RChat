function Input() {
    return (
      <div className="bg-stone-50  flex-col w-2/4">
          <input 
              type="text" 
              id="first_name" 
              className=" border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " 
              placeholder="Ingresar Mensaje" 
              required/>
      </div>
    );
  }
  
  export default Input;
  