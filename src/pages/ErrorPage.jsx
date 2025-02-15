import { useRouteError } from "react-router-dom";

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
    </div>
  );
};

export default ErrorPage;
