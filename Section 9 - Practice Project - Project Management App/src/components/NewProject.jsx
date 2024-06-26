export default function NewProject({setAddProjectSelected}) {
    function handleProjectSelected(){
        setAddProjectSelected((prevState) => !prevState);
    }
  return (
    <div className="flex flex-col justify-center space-y-3 mb-32 w-full pr-20 pl-10">
      <div className="flex flex-row space-x-3 ml-auto">
        <button onClick={handleProjectSelected}>Cancel</button>
        <button className="px-5 py-1.5 text-xs md:text-base rounded-md bg-stone-900 text-stone-100 hover:bg-stone-700 hover:text-stone-100">
          Save
        </button>
      </div>
      <div className="flex flex-col items-start space-y-1">
        <label className="text-xs text-stone-500 font-bold uppercase">
          Title
        </label>
        <input
          id="content1"
          type="text"
          className="bg-stone-200 border-b border-stone-800 p-1 w-full"
        />
      </div>
      <div className="flex flex-col items-start space-y-1">
        <label className="text-xs text-stone-500 font-bold uppercase">
          Description
        </label>
        <input
          type="text"
          className="bg-stone-200 border-b border-stone-800 p-1 w-full"
        />
      </div>
      <div className="flex flex-col items-start space-y-1">
        <label className="text-xs text-stone-500 font-bold uppercase">
          Due Date
        </label>
        <input
          id="content1"
          type="date"
          className="bg-stone-200 border-b border-stone-800 p-1 w-full"
        />
      </div>
    </div>
  );
}
