function Button({ text }) {
  return (
    <button className="sm:text-md custom:text-sm text-gray-500 hover:text-white transition-all duration-200">
      {text}
    </button>
  );
}
export default Button;
