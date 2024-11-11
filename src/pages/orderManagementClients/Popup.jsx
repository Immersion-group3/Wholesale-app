const Popup = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div className="bg-white p-4 rounded-lg shadow-lg max-w-md w-full">
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
            Close
          </button>
          {children}
        </div>
      </div>
    );
  };
  
  export default Popup;