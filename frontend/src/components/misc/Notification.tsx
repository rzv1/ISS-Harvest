interface NotificationProps{
    text: string;
    type: string;
    onClose: () => void;
}

export const Notification = ({text, type, onClose}: NotificationProps) => {
    return (
        <div className={`${
            type === 'fail' ? "bg-[#fde7e7] text-[#902525] border border-red-200" : "bg-[#e7f3e5] text-[#2e5d26] border border-green-200"
        } p-3.5 px-4 rounded-2xl absolute bottom-6 left-4 right-4 z-50 shadow-lg flex items-center justify-between transition-all duration-300`}>
            <span className="font-medium text-sm leading-tight mr-2">{text}</span>
            <button className="font-bold text-gray-500 hover:text-gray-800 text-sm px-1.5 py-0.5" onClick={onClose}>✕</button>
        </div>
    );
};