import { useNavigate } from "react-router-dom";

export const OrderSummary = () => {
  const navigate = useNavigate();

  return (
    <>
      <h3>Order Success</h3>
      <button onClick={() => navigate(-1)}>Back</button>
    </>
  );
};
