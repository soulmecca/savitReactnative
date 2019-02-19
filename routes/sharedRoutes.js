import LikesScreen from "../Screens/LikesScreen";
import CommentsScreen from "../Screens/CommentsScreen";

const sharedRoutes = {
   Likes: {
      screen: LikesScreen
   },
   Comments: {
      screen: CommentsScreen
   }
};

const sharedOptions = {
   navigationOptions: {
      headerStyle: {
         backgroundColor: "#FBFBFB"
      }
   }
};

export { sharedOptions };

export default sharedRoutes;
