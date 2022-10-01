import React from "react";
import { connect } from "react-redux";
import { Select, Form } from "antd";
import { State } from "../../redux/State";
import { DispatchTypes } from "../../redux/Actions";
import { updateRating } from "../../redux/ActionCreators";
import { Rating } from "../../models/Filters";
const { Option } = Select;

const mapStateToProps = (state: State) => ({
  isLoading: state.isLoading,
  rating: state.filters.rating,
});

const mapDispatchToProps = (dispatch: DispatchTypes) => ({
  onChange: (value: Rating) => dispatch(updateRating(value))
});

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;
export default connect(mapStateToProps, mapDispatchToProps);
