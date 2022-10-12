import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <h3>Home</h3>
      <button onClick={() => navigate("order-summary")}>Order</button>
    </>
  );
};
