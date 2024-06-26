export default function ProjectScreen({ setAddProjectSelected }) {
    function handleProjectSelected(){
        setAddProjectSelected((prevState) => !prevState);
    }
  return (
    <div className="flex flex-col justify-center items-center space-y-5 mr-auto ml-auto mb-32 ">
      <img src="/logo.png" alt="Project Image" width={60} />
      <h2 className="font-bold md:text-xl text-stone-700">
        No Project Selected
      </h2>
      <p className="text-stone-500">
        Select a project or get started with a new one
      </p>
      <button onClick={handleProjectSelected} className="px-4 py-1.5 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
        Create New Project
      </button>
    </div>
  );
}
