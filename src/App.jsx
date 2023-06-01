import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [showOrderModal, setShowOrderModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowOrderModal(true);
    }, 2000);
  }, []);
  return (
    <div>
      {showOrderModal && (
        <div className="fixed kulim-park bg-white shadow-xl h-[500px] my-auto  inset-0 bg-opacity z-10 flex flex-col items-center justify-start w-[80%]  mx-auto">
          <div className="flex justify-end w-full p-4">
            <button
              className="bg-black text-white px-4 py-2 rounded-lg"
              onClick={() => setShowOrderModal(false)}
            >
              X
            </button>
          </div>
          <form className="space-y-4 md:space-y-6">
            <p>
              <span className="text-2xl font-bold">Ticket data</span>
            </p>
            Modal for ticket sales...
          </form>
        </div>
      )}

      <p>Mwamba rugby club</p>
    </div>
  );
}

export default App;
