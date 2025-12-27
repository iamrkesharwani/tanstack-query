import { X, Plus } from 'lucide-react';

const Modal = ({ setModal }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Create Post</h2>
          <button
            className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition"
            onClick={() => setModal(false)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <form className="space-y-4">
            <div>
              <label
                htmlFor="modal-title"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Title
              </label>
              <input
                type="text"
                id="modal-title"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 outline-none"
                placeholder="Enter post title..."
              />
            </div>

            <div>
              <label
                htmlFor="modal-body"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Content
              </label>
              <textarea
                id="modal-body"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 outline-none resize-none"
                placeholder="Write your post content..."
              />
            </div>
          </form>
        </div>

        <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200 bg-gray-50 rounded-b-lg">
          <button
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none active:scale-95"
            onClick={() => setModal(false)}
          >
            Cancel
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none active:scale-95 flex items-center gap-2">
            <Plus />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
