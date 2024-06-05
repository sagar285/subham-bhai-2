import React from "react";

const PriceTable = () => {
  return (
    <div className="p-4 bg-gray-200">
      <div className="p-4 sm:p-8 bg-white min-h-screen">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8 text-green-800">
          Price
        </h1>
        <div className="flex flex-col lg:flex-row justify-between items-start">
          <table className="table-auto bg-white rounded shadow-md w-full lg:w-2/3 mb-4 lg:mb-0">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Item</th>
                <th className="px-4 py-2 border">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border">Item 1</td>
                <td className="px-4 py-2 border">$10</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Item 2</td>
                <td className="px-4 py-2 border">$20</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Item 3</td>
                <td className="px-4 py-2 border">$20</td>
              </tr>
            </tbody>
          </table>
          <div className="flex flex-col items-center w-full lg:w-1/3 lg:ml-8">
            <img
              src="costing.webp"
              alt="Product"
              className="w-full h-48 sm:h-64 object-cover rounded mb-4"
            />
            <button className="bg-green-900 text-white w-full px-4 py-2 rounded">
              Complete Costing Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceTable;
