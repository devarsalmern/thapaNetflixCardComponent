const Practice = () => {
  const students = [1];
  return (
    <>
      {/*To solve below problem because of and operator it ruturns true or false only. for making first value true so that it checks the other condition as well
       */}
      {/* <p>{students.length && "No students found"}</p> */}
      <p>{students.length === 0 && "No students found"}</p>
      <p>No. of students {students.length}</p>
    </>
  );
};

export default Practice;
