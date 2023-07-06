const Modal = ({ title, message, onConfirm, onCancel }) => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div className="bg-white rounded-lg p-6 max-w-md mx-auto  z-20">
          <div className="text-center">
            <h3 className="text-lg font-medium mb-2">{title}</h3>
            <p className="text-sm text-gray-500 mb-4">{message}</p>
          </div>
          <div className="flex justify-center">
            <button
              className="px-4 py-2 rounded-md text-white bg-red-500 hover:bg-red-600 mr-2"
              onClick={onConfirm}
            >
              確定
            </button>
            <button
              className="px-4 py-2 rounded-md text-gray-600 border border-gray-300 hover:bg-gray-100"
              onClick={onCancel}
            >
              取消
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
