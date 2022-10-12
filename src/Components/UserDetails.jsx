import { useParams } from "react-router-dom";

export const UserDetails = () => {
  const params = useParams();
  const userId = params.userId;
  return (
    <>
      <h3>Details about user {userId}</h3>
    </>
  );
};
