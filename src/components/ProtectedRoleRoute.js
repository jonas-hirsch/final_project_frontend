import React from "react";
import { Route } from "react-router-dom";
import { useHistory } from "react-router-dom";

// Example usage: <ProtectedRolesRoute path="/contact" component={Contact} me={me} roles={["admin"]}/>
const ProtectedRoute = ({ component: Component, me, roles, ...rest }) => {
  const history = useHistory();
  const displayError = () => {
    alert("You are not authorized for this page.");
    history.goBack();
  };

  return (
    <Route
      {...rest}
      render={(props) =>
        me && roles && roles.some((role) => me.role === role) ? (
          <Component {...props} me={me} />
        ) : (
          displayError()
        )
      }
    />
  );
};

export default ProtectedRoute;
