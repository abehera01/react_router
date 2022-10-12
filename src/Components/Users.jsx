import { Outlet, useSearchParams } from "react-router-dom";

export const Users = () => {
  const [searchParams, SetSearchParams] = useSearchParams();
  return (
    <>
      <h3>User 1</h3>
      <h3>User 2</h3>
      <h3>User 3</h3>
      <Outlet />
      <div>
        <button onClick={() => SetSearchParams({ filter: "active" })}>
          Active Users
        </button>
        <button onClick={() => SetSearchParams({})}>Reset Users</button>
      </div>
    </>
  );
};
