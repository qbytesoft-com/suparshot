function ButtonWrapper({ href = null, className, children }) {
  return href ? (
    <a href={href} className={className}>
      {children}
    </a>
  ) : (
    <button className={className}>{children}</button>
  );
}

function Button({ children, ...props }) {
  let className = 'btn btn-primary';
  return (
    <>
      <ButtonWrapper className={className} children={children} {...props} />
    </>
  );
}

export default Button;
