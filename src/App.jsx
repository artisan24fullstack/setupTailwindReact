function App() {

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Vite + React + tailwindcss
      </h1>
      {/* Before extracting a custom class */}
      <button className="py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75">
        Save changes
      </button>

      {/* After extracting a custom class */}
      <button className="btn-primary">
        Save changes
      </button>
    </>
  )
}

export default App
