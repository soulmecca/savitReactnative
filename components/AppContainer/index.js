import { connect } from "react-redux";
import AppContainer from "./presenter";

const mapStateToProps = (state, ownProps) => {
   const { auth } = state;
   return {
      isLoggedIn: auth.isLoggedIn,
      profile: auth.profile
   };
};

export default connect(mapStateToProps)(AppContainer);
