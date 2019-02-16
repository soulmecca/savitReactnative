import { connect } from "react-redux";
import LoginContainer from "./container";
import { usernameLogin } from "../../redux/actions/auth";

export default connect(
   null,
   { usernameLogin }
)(LoginContainer);
