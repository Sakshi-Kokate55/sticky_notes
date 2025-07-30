const Container = ({ children }) => {
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",         
    justifyContent: "center", 
    gap: "20px",              
    padding: "20px",
  };

  return <div style={containerStyle}>{children}</div>;
};

export default Container;
