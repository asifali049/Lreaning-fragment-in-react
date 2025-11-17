const ErrorMessage = ({ items }) => {
  return (
    <>
      {items.length === 0 && <p className="no-food">No food items available</p>}
    </>
  );
};
export default ErrorMessage;
