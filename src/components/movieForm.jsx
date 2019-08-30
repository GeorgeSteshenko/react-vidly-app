import React, { Fragment } from "react";

const MovieForm = ({ match, history }) => {
  //   handleSave = () => {
  //     // Navigate to /products
  //     this.props.history.replace("/products");
  //   };

  return (
    <Fragment>
      <h1>Movie Form {match.params.id}</h1>
      <button
        className="btn btn-primary"
        onClick={() => history.push("/movies")}
      >
        Save
      </button>
    </Fragment>
  );
};

export default MovieForm;
