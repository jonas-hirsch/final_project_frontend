import React from "react";
import { Route } from "react-router-dom";
import { useHistory } from "react-router-dom";

// Example usage: <ProtectedRoute path="/admin" component={Admin} me={me} />
const ProtectedRoute = ({ component: Component, me, ...rest }) => {
  const history = useHistory();
  return (
    <Route
      {...rest}
      render={(props) =>
        me ? <Component {...props} me={me} /> : history.push("/login")
      }
    />
  );
};

export default ProtectedRoute;
