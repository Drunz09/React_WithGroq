import "./App.css";
import { Suspense, useState } from "react";
import { Light } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import requestToGroqAi from "./utils/groq";

function App() {
  const [data, setData] = useState("");

  const handleClick = async () => {
    // eslint-disable-next-line no-undef
    const ai = await requestToGroqAi(content.value);
    setData(ai);
  };

  return (
    <>
      <main className="flex flex-col min-h-[100vh] mx-auto justify-center items-center gap-4 max-w-2xl w-full">
        <h1 className="text-white text-4xl font-bold">React With Groq</h1>
        <form className="flex flex-col  w-full">
          <input type="text" placeholder="Write here... " id="content" className="p-3 rounded-md my-3" />
          <button type="button" onClick={handleClick} className="p-2 rounded-md bg-blue-700 text-white font-serif text-2xl">
            Submit
          </button>
        </form>
        <div className="max-w-2xl">
          {data ? (
            <Suspense
              fallback={
                <div>
                  <p className="text-white text-xl">Loading....</p>
                </div>
              }
            >
              <Light language="swift" style={dracula} wrapLongLines={true}>
                {data}
              </Light>
            </Suspense>
          ) : null}
        </div>
      </main>
    </>
  );
}

export default App;
