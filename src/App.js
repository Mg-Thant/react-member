import { useState } from "react";
import Student1 from "./components/One/Student1";
import CustomForm from "./components/One/CustomForm";

function App() {
  const [students, setStudents] = useState([]);

  const addNewMember = (memInfo) => {
    setStudents([...students, memInfo]);
  };

  let contentSection = <p>No member yet!</p>;

  if(!students.length < 1) {
    contentSection = students.map((student) => (
      <Student1 name={student.name} live={student.live} key={student.name}/>
    ));
  }

  return (
    <div className="App">
      <section className="middle">
      {
        contentSection
      }
      </section>
      <CustomForm addNewMember={addNewMember}/>
    </div>
  );
}

export default App;
