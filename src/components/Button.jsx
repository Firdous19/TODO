function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="sm:text-md custom:text-sm text-gray-500 hover:text-white transition-all duration-200"
    >
      {children}
    </button>
  );
}
export default Button;
