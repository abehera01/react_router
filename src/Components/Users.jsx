import { Outlet, useSearchParams } from "react-router-dom";

export const Users = () => {
  const [searchParams, SetSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";
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
        <div>
          {showActiveUsers ? (
            <h2>show Active Users</h2>
          ) : (
            <h2>showing all Users</h2>
          )}
        </div>
      </div>
    </>
  );
};
