import React,{useState,useEffect,useCallback} from 'react'

export const Hooks = () => {

    const [peoples,setPeoples]=useState([]);
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState(0);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setPeoples(prev=>{
        return [
            ...prev,
            {id: prev.length, surname,age}
        ]
    })
  },[]);

//   const tablica=useMemo(()=>{ 
//     obliczCostam(a)
//   },[a])



  return (
    <>
    <form onSubmit={handleSubmit}>
      <label htmlFor="surname">Surname</label>
      <input
        type="text"
        name="surname"
        onChange={(e) => setSurname(e.target.value)}
      />
      <label htmlFor="surname">Age</label>
      <input
        type="number"
        name="age"
        onChange={(e) => setAge(e.target.value)}
      />
      <button type="submit">Send form</button>
    </form>
    <div>
        {peoples.map(el=>{
           return <p key={el.id}>{el.surname}<span>{el.age}</span></p>
        })}
    </div>
    </>
  );
}
