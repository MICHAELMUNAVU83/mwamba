import React from "react";

const Standings = () => {
  const standings = [
    {
      pos: 1,
      team: "Kabras Sugar RFC ",
      p: 4,
      w: 8,
      l: 17,
      d: 17,
      pf: 25,
      pa: 33,
    },
    {
      pos: 2,
      team: "KCB",
      p: 4,
      w: 8,
      l: 17,
      d: 17,
      pf: 22,
      pa: 37,
    },
    {
      pos: 3,
      team: "Kabras Sugar RFC ",
      p: 4,
      w: 8,
      l: 17,
      d: 17,
      pf: 25,
      pa: 33,
    },
    {
      pos: 4,
      team: "KCB",
      p: 4,
      w: 8,
      l: 17,
      d: 17,
      pf: 22,
      pa: 37,
    },
    {
      pos: 5,
      team: "Kabras Sugar RFC ",
      p: 4,
      w: 8,
      l: 17,
      d: 17,
      pf: 25,
      pa: 33,
    },
    {
      pos: 6,
      team: "KCB",
      p: 4,
      w: 8,
      l: 17,
      d: 17,
      pf: 22,
      pa: 37,
    },
  ];
  return (
    <div className="bg-[#1E1E1E] flex flex-col justify-between  min-h-[100vh]">
      <div className="flex pt-8 flex-col gap-2 items-start justify-end">
        <select className="bg-white text-[#1E1E1E] rounded-r-3xl w-[500px] h-[80px] text-2xl font-bold">
          <option value="2018/2019 Kenya Cup">2018/2019 Kenya Cup</option>
          <option value="2018/2019 Kenya Cup">2020/2021 Kenya Cup</option>
        </select>
        <p className="text-white text-2xl">Which Cup Are You Interested In?</p>
      </div>
      <div className="flex  items-center mt-4 w-[80%] mx-auto justify-center">
        <div className="w-[100%] bg-white  p-4 overflow-x-auto ">
          <table className="w-full max-h-[80vh]   overflow-y-scroll text-sm text-left text-gray-5000">
            <thead className="text-xs bg-white border-b border-gray-700">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 font-medium tracking-wider"
                >
                  Pos
                </th>
                <th scope="col" className="px-6 py-3">
                  Team
                </th>
                <th scope="col" className="px-6 py-3">
                  P
                </th>
                <th scope="col" className="px-6 py-3">
                  W
                </th>
                <th scope="col" className="px-6 py-3">
                  L
                </th>
                <th scope="col" className="px-6 py-3">
                  D
                </th>
                <th scope="col" className="px-6 py-3">
                  PF
                </th>
                <th scope="col" className="px-6 py-3">
                  PA
                </th>
              </tr>
            </thead>
            <tbody>
              {standings.map((standing) => (
                <tr className="bg-white ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {standing.pos}
                  </th>
                  <td className="px-6 py-4">{standing.team}</td>
                  <td className="px-6 py-4">{standing.p}</td>
                  <td className="px-6 py-4">{standing.w}</td>
                  <td className="px-6 py-4">{standing.l}</td>
                  <td className="px-6 py-4">{standing.d}</td>
                  <td className="px-6 py-4">{standing.pf}</td>
                  <td className="px-6 py-4">{standing.pa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="p-8 text-7xl font-bold text-white">
        Standings
      </div>
    </div>
  );
};

export default Standings;
