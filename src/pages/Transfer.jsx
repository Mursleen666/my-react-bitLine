import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const dummyData = Array.from({ length: 57 }, (_, i) => ({
  id: i + 1,
  icon: "₿",
  title: "Bitcoin Test",
  reference: `BTX52${200 + i}`,
  description: "Guarantee liquidated",
  date: `07/${String((i % 30) + 1).padStart(2, '0')}/2025 20:10:09`,
  amount: "-0.000200000 BTC_TEST",
  status: "Complete",
  fee: "-",
}));

const Transfer = () => {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [showCalendar, setShowCalendar] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const handleSelect = (item) => {
    setRange([item.selection]);
    setShowCalendar(false);
  };

  const filteredData = dummyData.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / pageSize);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div>
      <div className="mb-4 flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
        <div>
          <label className="font-semibold text-gray-700 mr-5">Date:</label>
          <div className="inline-flex gap-4 mt-4">
            <p className="py-1">From:</p>
            <div
              onClick={() => setShowCalendar(true)}
              className="bg-gray-100 px-3 py-2 rounded cursor-pointer border"
            >
              {format(range[0].startDate, "MM/dd/yyyy")}
            </div>
            <p className="py-1"> To:</p>
            <div
              onClick={() => setShowCalendar(true)}
              className="bg-gray-100 px-3 py-2 rounded cursor-pointer border"
            >
              {format(range[0].endDate, "MM/dd/yyyy")}
            </div>
          </div>
          {showCalendar && (
            <div className="absolute z-50 mt-2">
              <DateRange
                editableDateInputs
                onChange={handleSelect}
                moveRangeOnFirstSelection={false}
                ranges={range}
                months={1}
                direction="horizontal"
              />
            </div>
          )}
        </div>

        <div>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md w-[370px] lg:w-64"
          />
        </div>
      </div>

      <div className="w-full bg-white shadow overflow-hidden">
        <div className="overflow-x-auto">
          <div className="max-h-[400px] overflow-y-auto">
            <div className="min-w-[600px]">
              <div className="bg-[#2062A0] text-white font-semibold grid grid-cols-3 p-4">
                <div className="ml-14">Reference</div>
                <div>Date</div>
                <div  className="ml-16">Amount</div>
              </div>

              {paginatedData.map((item) => (
                <div
                  key={item.id}
                  className="border-b text-sm grid grid-cols-3 items-start p-4 bg-white hover:bg-gray-50 transition"
                >
                  <div className="flex items-start gap-3">
                    <div className="bg-orange-400 text-white rounded-full h-10 w-10 flex items-center justify-center text-xl font-bold">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-semibold">{item.title} <span className="text-[10px] text-gray-500">BTC_TEST</span></div>
                      <div className="text-xs text-gray-500">{item.reference}</div>
                      <div className="text-sm font-semibold mt-2">Description</div>
                      <div className="text-xs text-gray-600">{item.description}</div>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-gray-700">{item.date}</div>
                    <div className="mt-4">
                      <span className="text-sm font-semibold">Status</span>
                      <div className="text-green-600 text-sm font-medium flex items-center gap-1">
                        <span className="h-2 w-2 bg-green-500 rounded-full inline-block"></span> {item.status}
                      </div>
                    </div>
                  </div>

                  <div className="text-right flex flex-col justify-between h-full">
                    <div className="text-sm text-gray-700">{item.amount}</div>
                    <div className="mt-8">
                      <div className="font-semibold text-sm">Fee</div>
                      <div className="text-sm text-gray-600">{item.fee}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <label className="hidden lg:block text-sm">Items per page:</label>
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="border px-2 py-1 rounded"
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            className="px-2 py-1 border rounded disabled:opacity-50"
          >
            ⏮️
          </button>
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-2 py-1 border rounded disabled:opacity-50"
          >
            ◀️
          </button>
          <span className="text-sm">Page {currentPage} of {totalPages}</span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-2 py-1 border rounded text-green-600 disabled:opacity-50"
          >
            ▶️
          </button>
          <button
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
            className="px-2 py-1 border rounded disabled:opacity-50"
          >
            ⏭️
          </button>
        </div>
      </div>
    </div>
  );
};

export default Transfer;
