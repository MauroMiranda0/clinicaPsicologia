export default function Button({ children, onClick, secondary = false, className = '', ...props }) {
  return (
    <button
      className={`${secondary ? 'secondary' : 'primary'} ${className}`.trim()}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
