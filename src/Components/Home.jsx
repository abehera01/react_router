import { useNavigate } from "react-router-dom";

// {replace:true} use in button to exit the page

export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <h3>Home</h3>
      <button onClick={() => navigate("order-summary",)}>Order</button>
    </>
  );
};
