import { Link } from 'react-router-dom';
function ButtonWrapper({ href = null, className, children, onClick = () => {} }) {
  return href ? (
    <Link to={href} className={className} onClick={() => onClick()}>
      {children}
    </Link>
  ) : (
    <button className={className} onClick={() => onClick()}>
      {children}
    </button>
  );
}

function Button({ variant = 'primary', children, className = '', onClick, ...props }) {
  let btnType = variant === 'light' ? 'btn-light' : 'btn-primary';
  let baseClass = `btn ${btnType} ${className}`;
  return (
    <>
      <ButtonWrapper className={baseClass} children={children} {...props} onClick={onClick} />
    </>
  );
}

export default Button;
