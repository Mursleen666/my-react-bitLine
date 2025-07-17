import React, { useRef, useState } from "react";
import lockLocked from '../assets/imgi55.png'
import lockUnLocked from '../assets/imgi66.png'
import logoStar from '../assets/imgi77.png'
import Footer from "../components/Footer";

// Demo Data
const cardData = [
  {
    id: 1,
    venueName: "https://steamunlocked.io/wp-content/uploads/2025/01/imgi_3_XBT.eef29c5e729194df7feb6fda655a8630.png",
    status: "Confirming",
    total: "8,973.5 XLM_TEST",
    deposit: { amount: "2,836.36 XLM_TEST", usd: "$680.73 USD" },
    withdraw: { amount: "6,137.14 XLM_TEST", usd: "$1,472.91 USD" },
    createDate: "2025-07-10",
    lockDate: "2025-07-12",
  },
  {
    id: 2,
    venueName: "https://steamunlocked.io/wp-content/uploads/2025/01/imgi_7_default.3c28ec36aeb2b1644825c6645d6e020c.png",
    status: "Confirmed",
    total: "4,200.0 XLM_TEST",
    deposit: { amount: "1,000.00 XLM_TEST", usd: "$250.00 USD" },
    withdraw: { amount: "3,200.00 XLM_TEST", usd: "$750.00 USD" },
    createDate: "2025-07-11",
    lockDate: "2025-07-13",
  },
  {
    id: 3,
    venueName: "https://steamunlocked.io/wp-content/uploads/2025/01/imgi_3_XBT.eef29c5e729194df7feb6fda655a8630.png",
    status: "Pending",
    total: "7,000.0 XLM_TEST",
    deposit: { amount: "3,000.00 XLM_TEST", usd: "$750.00 USD" },
    withdraw: { amount: "4,000.00 XLM_TEST", usd: "$950.00 USD" },
    createDate: "2025-07-12",
    lockDate: "2025-07-14",
  },
  // Add more if needed
];

const itemsPerPageOptions = [5, 10, 20];

const HomePage = () => {
  const scrollRef = useRef(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);

  // Filtered data by venue name
  const filteredData = cardData.filter((item) =>
    item.venueName.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) setCurrentPage(newPage);
  };

  return (
    <div className="h-[500px] lg:h-[495px] lg:overflow-y-auto px-0 lg:px-6 mt-0 py-0 lg:py-4 bg-white text-gray-700">
      <div className="min-h-screen bg-white mr-5 mb-0 lg:mb-7">
        {/* Scrollable Cards Section (TOP) */}
        {/* Scrollable Cards Section (TOP) */}
        <div className="relative flex items-start mb-0 lg:mb-11">
          {/* Left arrow */}
          <button
            onClick={scrollLeft}
            className="hidden lg:block absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#2062A0] hover:bg-blue-950 text-white rounded-full w-8 h-8  items-center justify-center shadow"
          >
            &#8592;
          </button>

          <div className="flex flex-row items-start w-full">
            {/* Scrollable Cards */}
            <div
              ref={scrollRef}
              className="overflow-x-auto flex space-x-4 pl-0 lg:pl-6 scroll-smooth"
              style={{ scrollbarWidth: "none" }}
            >
              {filteredData.map((card) => (
                <div
                  key={card.id}
                  className="min-w-[300px] border-gray-300 rounded-[3px] border-[1px] p-4 flex flex-col items-center"
                >
                  <div className="mb-2"><img className="w-14" src={card.venueName} alt="" /></div>
                  <div className="text-sm text-gray-500 mb-2">{card.status}</div>
                  <div className="text-2xl mt-1 font-bold">{card.total}</div>
                  <div className="w-full h-44 mt-3">

                    <div className="flex gap-5 items-center mt-4 bg-[#E0F1DD] border-[1px] border-green-500 text-green-800 p-2 rounded mb-2">
                      <div><img className="w-5" src={lockUnLocked} alt="" /></div>
                      <div>
                        <div className="text-lg font-semibold">{card.deposit.amount}</div>
                        <div className="text-sm font-semibold text-black">{card.deposit.usd}</div>
                      </div>
                    </div>

                    <div className="flex gap-5 items-center mt-3 bg-[#FEE2E2] border-[1px] border-red-500 text-red-800 p-2 rounded">
                      <div><img className="w-5" src={lockLocked} alt="" /></div>
                      <div>
                        <div className="text-lg font-semibold">{card.withdraw.amount}</div>
                        <div className="text-sm font-semibold text-black">{card.withdraw.usd}</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-1">
                    <button className="bg-[#283382] text-white py-1 px-10 rounded-full text-[12px] font-semibold">Deposit</button>
                    <button className="bg-indigo-100 text-indigo-800 py-1 px-10 rounded-full text-[12px] font-semibold ">Withdraw</button>
                  </div>
                </div>
              ))}
            </div>

            {/* Fixed Create Transaction Card */}
            <div className="flex-col items-center  hidden lg:block min-w-[270px] w-[270px] h-96 ml-4 shrink-0 bg-[#C9CCE0] rounded-[3px] justify-center pl-14 ">
              <div> <img className="mt-12" src={logoStar} alt="" />
                <button className="bg-[#283382] text-white mr-13 py-2 px-4 mt-10 rounded-full">
                  Create Transaction
                </button>
              </div>
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={scrollRight}
            className="hidden lg:block absolute right-64 top-1/2 transform -translate-y-1/2 z-10 bg-[#2062A0] hover:bg-blue-950 text-white rounded-full w-8 h-8  items-center justify-center shadow"
          >
            &#8594;
          </button>
        </div>


        {/* Table Section (BOTTOM) */}
        <div>
          <div className="flex-col lg:flex-row flex justify-between items-center mb-3">
            <h2 className="mb-4 lg:mb-0 text-2xl font-bold">Live Transactions</h2>
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              className="border w-full lg:w-60 px-3 py-2 rounded"
            />
          </div>

          {/* Table Headers */}
          <div className="bg-[#2062A0] text-white grid grid-cols-3 py-2 px-4 rounded-t">
            <div>Venue Name</div>
            <div>Create Date</div>
            <div>Lock Date</div>
          </div>

          {paginatedData.length === 0 ? (
            <div className="flex flex-col items-center py-12 text-gray-600">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
                alt="No Data"
                className="w-40 mb-6"
              />
              <p className="mb-4 text-lg">You have no live transactions</p>
              <button className="bg-rose-700 text-white px-6 py-2 rounded-full">
                Create A Transaction
              </button>
            </div>
          ) : (
            <>
              {/* Table Rows */}
              <div className="border border-t-0 rounded-b h-[120px] overflow-y-auto overflow-hidden">
                {paginatedData.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-3 py-3 px-4 border-t text-gray-700"
                  >
                    <div>test venue</div>
                    <div>{item.createDate}</div>
                    <div>{item.lockDate}</div>
                  </div>
                ))}
              </div>

              {/* Pagination Controls */}
              <div className="mt-6 flex justify-between items-center text-sm">


                <div className="flex items-center space-x-2">

                  <select
                    value={itemsPerPage}
                    onChange={(e) => {
                      setItemsPerPage(parseInt(e.target.value));
                      setCurrentPage(1);
                    }}
                    className="border rounded px-2 py-1"
                  >
                    {itemsPerPageOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handlePageChange(1)}
                    disabled={currentPage === 1}
                    className="px-2"
                  >
                    ⏮
                  </button>
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-2"
                  >
                    ◀
                  </button>
                  <span>
                    Page {currentPage} of {totalPages || 1}
                  </span>
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-2"
                  >
                    ▶
                  </button>
                  <button
                    onClick={() => handlePageChange(totalPages)}
                    disabled={currentPage === totalPages}
                    className="px-2"
                  >
                    ⏭
                  </button>
                </div>



              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
