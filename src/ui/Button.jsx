import { Link } from 'react-router-dom';
function Button({ children, disabled, to, type, onClick }) {
  const base =
    'rounded-full text-sm bg-yellow-400 font-semibold tracking-wide text-stone-800 uppercase transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed';

  const styles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4',
    small: base + ' py-2 px-3 md:px-5 md:py-2.5',
    secondary:
      'rounded-full text-sm border-2 border-stone-300 font-semibold tracking-wide text-stone-400 uppercase transition-colors duration-300 hover:text-stone-800 hover:bg-stone-300 focus:text-stone-800 focus:bg-stone-300 focus:ring focus:ring-stone-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed py-2 px-4 sm:px-5 sm:py-1.5 ',
    round: base + ' px-2.5 py-1 md:px-3.5 md:py-2 text-sm',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick) {
    return (
      <button
        onClick={onClick}
        to={to}
        disabled={disabled}
        className={styles[type]}
      >
        {children}
      </button>
    );
  }

  return (
    <button to={to} disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
