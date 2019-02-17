import { connect } from "react-redux";
import LoginContainer from "./container";
import { usernameLogin, facebookLogin } from "../../redux/actions/auth";

export default connect(
   null,
   { usernameLogin, facebookLogin }
)(LoginContainer);
