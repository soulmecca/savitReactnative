import React, { Component } from "react";
import FeedScreen from "./presenter";

class FeedContainer extends Component {
   render() {
      return <FeedScreen {...this.props} />;
   }
}

export default FeedContainer;
