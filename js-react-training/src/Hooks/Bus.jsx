import React, { useState, useCallback } from "react";

export const Bus = () => {
  const [kids, setKids] = useState([
    {
      name: "Barbara",
      age: 10,
    },
    {
      name: "Katarzyna",
      age: 12,
    },
  ]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    console.log(name,age);
    setKids((prev) => {
      return [...prev, { name: name, age: age }];
    });
    console.log(kids);
  }, [name, age, kids]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Imię </label>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="age">Wiek </label>
        <input
          type="number"
          name="age"
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <button type="submit">Send form</button>
      </form>
      <div>
        <table>
          <tbody>
          {kids.map((el) => {
            return (
              <tr key={el.age}>
                <td>{el.name}</td>
                <td>{el.age}</td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    </>
  );
};
