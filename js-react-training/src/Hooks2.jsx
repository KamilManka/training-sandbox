import { useRef } from "react";

//M V C

const useHooks2=()=>{
     const surnameInputEl = useRef("");
  const ageInputEl = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      surname: surnameInputEl.current?.value,
      age: ageInputEl.current?.value,
    };
    console.log(data);
  };

  return {
    ageInputEl,
    surnameInputEl,
    handleSubmit
  }
}

export const Hooks2 = () => {
 
    const {handleSubmit,surnameInputEl,ageInputEl}=useHooks2();
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="surname">Surname</label>
      <input ref={surnameInputEl} type="text" name="surname" />
      <label htmlFor="surname">Age</label>
      <input ref={ageInputEl} type="number" name="age" />
      <button type="submit">Send form</button>
    </form>
  );
};
