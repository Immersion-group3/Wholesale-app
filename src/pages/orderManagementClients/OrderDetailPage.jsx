import Sidebar from '../../components/Sidebar';
import { CiImport } from "react-icons/ci";

const OrderDetailPage = () => {
  return (
    <div className="flex bg-white min-h-screen font-sans">
      
      <div><Sidebar /></div>

      {/* Main section Content */}
      <section className="flex-1 p-8">
        <header className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl text-[#101828] font-semibold">Order Details</h1>
            <p className="text-gray-500">A Closer Look at Your Order: Every Detail Matters!</p>
          </div>
        </header>

        
        <section className="flex bg-white shadow-md rounded-lg p-6 mb-6 justify-between">
          <div className="flex  flex-col justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold">Order #978-1-111-95973-9</h2>
              <p className="text-[#f79009] font-medium">In Transit</p>
            </div>
            <p className="text-gray-300 text-sm bg-gray-100">Generated: 26/06/2024, 13:20 | Paid On: 28/06/2024, 13:25</p>
          </div>

          <div className="flex items-center space-x-3">
            <button className="bg-gray-200 text-gray-700 px-4 py-2 border rounded-lg flex "><span className='font-bold mt-1 mr-3 text-[#101828]'><CiImport /></span> Export to PDF</button>
            <button className="bg-green-800 text-white px-4 py-2 rounded-lg">Duplicate the Order</button>
          </div>
        </section>

        {/* Client and Delivery Information */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-50 rounded-lg p-4 shadow">
            <h3 className="text-gray-700 font-bold mb-2">Client and Order</h3>
            <p>Customer Name: Krystal Palace</p>
            <p>Phone Number: 69 89 87 66</p>
            <p>Email: goods@krystalpalace.com</p>
            <p>Mailing Address: 36251 Douala, Douala, Cameroun</p>
            <p>Payment Method: virement bancaire</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 shadow">
            <h3 className="text-gray-700 font-bold mb-2">Delivery Address</h3>
            <p>Recipient Name: Paul Bana</p>
            <p>Full Address: 36251 Douala, Douala, Cameroun</p>
            <p>Special Instructions: We are located on the 3rd floor, apartment 129</p>
          </div>
        </div>

        {/* Ordered Items Table */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-gray-700 font-bold mb-4">Ordered Items</h3>
          <table className="w-full border-t border-gray-200">
            <thead>
              <tr className="text-left bg-gray-100">
                <th className="py-2 px-4">Product Name</th>
                <th className="py-2 px-4">Quantity Ordered</th>
                <th className="py-2 px-4">Unit Price (Fca)</th>
                <th className="py-2 px-4">Total Price (Fca)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b border-gray-200">
                <td className="py-2 px-4">Côtelet branche</td>
                <td className="py-2 px-4">3 Kg</td>
                <td className="py-2 px-4">850</td>
                <td className="py-2 px-4">2550</td>
              </tr>
              <tr className="bg-gray-50 border-b border-gray-200">
                <td className="py-2 px-4">Haricot vert</td>
                <td className="py-2 px-4">18 Kg</td>
                <td className="py-2 px-4">450</td>
                <td className="py-2 px-4">8100</td>
              </tr>
              <tr className="bg-white border-b border-gray-200">
                <td className="py-2 px-4">Poivron rouge</td>
                <td className="py-2 px-4">19 Kg</td>
                <td className="py-2 px-4">4500</td>
                <td className="py-2 px-4">8550</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-6 text-right space-y-1">
            <p className="text-gray-700">Subtotal: <span className="font-semibold">23 200</span></p>
            <p className="text-gray-700">Delivery Fee: <span className="font-semibold">900</span></p>
            <p className="text-lg font-bold text-gray-900">Total: 23 250</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OrderDetailPage;