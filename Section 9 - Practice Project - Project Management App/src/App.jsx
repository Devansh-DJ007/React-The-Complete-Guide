import { useState } from "react";
import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";
import ProjectScreen from "./components/ProjectScreen";

function App() {
  const [addProjectSelected, setAddProjectSelected] = useState(false);
  return (
    <main className="h-screen flex gap-8">
      <Sidebar
        addProjectSelected={addProjectSelected}
        setAddProjectSelected={setAddProjectSelected}
      />
      {addProjectSelected ? (
        <NewProject setAddProjectSelected={setAddProjectSelected}/>
      ) : (
        <ProjectScreen setAddProjectSelected={setAddProjectSelected} />
      )}
    </main>
  );
}

export default App;
