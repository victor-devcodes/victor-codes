const Container = ({ children, className="" }) => {
  return (
    <div className="mx-auto w-full px-[8%] ${className}">
      {children}
    </div>
  );
};

export default Container;