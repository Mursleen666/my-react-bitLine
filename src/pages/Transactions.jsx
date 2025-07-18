import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Footer from "../components/Footer";

// 57 dummy records for pagination
const dummyData = Array.from({ length: 57 }, (_, i) => ({
  id: i + 1,
  initials: `V${i + 1}`,
  venueName: `Test Venue ${i + 1}`,
  location: `City ${i + 1}`,
  trn: `TRN${2000 + i + 1}`,
  createDate: "07/09/2025",
  assetValue: "0.000397340 BTC_TEST",
  transactionValue: "$20.00 USD",
  totalValue: "50%",
  actualValue: "62%",
  fee: "$2.00 USD",
  status: "Pending Casino Approval",
  statusColor: "text-yellow-600",
  iconBg: "bg-gray-700",
  expanded: false,
}));

const Transaction = () => {
  const [venues, setVenues] = useState(dummyData);
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

  const toggleExpand = (id) => {
    setVenues((prev) =>
      prev.map((venue) =>
        venue.id === id ? { ...venue, expanded: !venue.expanded } : venue
      )
    );
  };

  const handleSelect = (item) => {
    setRange([item.selection]);
    setShowCalendar(false);
  };

  const filteredVenues = venues.filter((venue) =>
    venue.venueName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.max(1, Math.ceil(filteredVenues.length / pageSize));
  const paginatedVenues = filteredVenues.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleFirstPage = () => setCurrentPage(1);
  const handleLastPage = () => setCurrentPage(totalPages);
  const handlePrevPage = () => setCurrentPage((p) => Math.max(p - 1, 1));
  const handleNextPage = () => setCurrentPage((p) => Math.min(p + 1, totalPages));

  return (
    <div className="px-0 lg:px-6">
      {/* Top Filters */}
      <div className="mb-4 mt-7 flex flex-col lg:flex-row gap-5 items-start lg:items-center justify-between">
        <div>
          <label className="font-semibold text-gray-700 mr-5">Create Date:</label>
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
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="px-3 py-2 border border-gray-300 rounded-md w-[345px] lg:w-64"
          />
        </div>
      </div>

      {/* Scrollable Table */}
      <div className="w-full bg-white shadow  overflow-hidden">
        <div className="overflow-x-auto">
          <div className="h-[540px] lg:max-h-[244px] overflow-y-auto">
            <div className="min-w-[600px]">
              <div className="bg-[#2062A0] text-white font-semibold grid grid-cols-3 p-4">
                <div className="ml-14">Venue Name</div>
                <div>Create Date</div>
                <div className="ml-16">Lock Date</div>
              </div>

              {paginatedVenues.map((venue) => (
                <div
                  key={venue.id}
                  className={`transition-all duration-300 ${venue.expanded ? "bg-gray-100" : "bg-white"
                    } border-b`}
                >
                  <div
                    className="grid grid-cols-3 items-center p-4 cursor-pointer"
                    onClick={() => toggleExpand(venue.id)}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`text-white rounded-full h-10 w-10 flex items-center justify-center font-semibold ${venue.iconBg}`}
                      >
                        {venue.initials}
                      </div>
                      <div>
                        <div className="font-semibold">{venue.venueName}</div>
                        <div className="text-sm text-gray-500">{venue.location}</div>
                        <div className="text-sm text-gray-400">{venue.trn}</div>
                      </div>
                    </div>
                    <div>{venue.createDate}</div>
                    <div className="flex items-center justify-between">
                      <div className="w-full h-1 bg-gray-200 rounded-full mr-2">
                        <div className="w-[50%] h-1 bg-gray-400 rounded-full"></div>
                      </div>
                      <span>30</span>
                      <span className="text-xl ml-4">
                        {venue.expanded ? "▲" : "▼"}
                      </span>
                    </div>
                  </div>

                  {venue.expanded && (
                    <div className="grid grid-cols-5 text-sm text-center gap-4 p-4 bg-gray-50">
                      <div>
                        <div className="text-gray-500">Asset Value</div>
                        <div>{venue.assetValue}</div>
                      </div>
                      <div>
                        <div className="text-gray-500">Transaction Value</div>
                        <div>{venue.transactionValue}</div>
                      </div>
                      <div>
                        <div className="text-gray-500">Total / Actual Value</div>
                        <div>
                          {venue.totalValue} / {venue.actualValue}{" "}
                          <span className="text-red-500">⚠️</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-gray-500">Fee</div>
                        <div>{venue.fee}</div>
                      </div>
                      <div>
                        <div className="text-gray-500">Status</div>
                        <div className={`${venue.statusColor} font-medium`}>
                          ● {venue.status}
                        </div>
                      </div>

                      <div className="col-span-5 flex justify-center mt-4">
                        <button className="px-4 py-1 bg-white border rounded-md text-sm hover:bg-gray-100">
                          Delete
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-4 mb-4 flex flex-row items-center justify-between gap-4">
        <div className="flex mb-12 lg:mb-6 items-center gap-2">
          <label className="hidden lg:block text-sm ">Items per page:</label>
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

        <div className="flex mb-6 items-center gap-2">
          <button
            onClick={handleFirstPage}
            disabled={currentPage === 1}
            className="px-2 py-1 border rounded disabled:opacity-50"
          >
            ⏮️
          </button>
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="px-2 py-1 border rounded disabled:opacity-50"
          >
            ◀️
          </button>
          <span className="text-sm">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-2 py-1 border rounded text-green-600 disabled:opacity-50"
          >
            ▶️
          </button>

          <button
            onClick={handleLastPage}
            disabled={currentPage === totalPages}
            className="px-2 py-1 border rounded disabled:opacity-50"
          >
            ⏭️
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Transaction;
