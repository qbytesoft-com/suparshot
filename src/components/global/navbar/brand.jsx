import { Link } from 'react-router-dom';
function Brand({ className = '' }) {
  let style = `brand-name text-white font-bold text-2xl mr-5 ${className}`;
  return (
    <Link to="/" className={style}>
      sShot
    </Link>
  );
}

export default Brand;
