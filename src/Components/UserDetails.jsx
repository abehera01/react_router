import { useParams } from "react-router-dom";

export const UserDetails = () => {
  const {userId} = useParams();
  return (
    <>
      <h3>Details about user {userId}</h3>
    </>
  );
};
