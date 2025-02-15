import { NavLink, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Oops! An error occured.</h1>
      {err && (
        <p>
          Error status:{err.status} {err.statusText} <br /> {err.data}
        </p>
      )}
      <NavLink to="/">
        <button>Go back to Home</button>
      </NavLink>
    </div>
  );
};

export default ErrorPage;
