function ButtonWrapper({ href = null, className, children }) {
  return href ? (
    <a href={href} className={className}>
      {children}
    </a>
  ) : (
    <button className={className}>{children}</button>
  );
}

function Button({ children, className = '', ...props }) {
  let baseClass = 'btn btn-primary ' + className;
  return (
    <>
      <ButtonWrapper className={baseClass} children={children} {...props} />
    </>
  );
}

export default Button;
