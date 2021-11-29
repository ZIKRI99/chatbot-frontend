import { createChatBotMessage } from "react-chatbot-kit";
import RecipeComponent from "../Components/RecipeComponent/index";

const config = {
  botName: "Cooking Chatbot",
  lang: "no",
  customStyles: {
    botMessageBox: { backgroundColor: "#376B7E" },
    chatButton: { backgroundColor: "#5ccc9d" },
  },
  initialMessages: [
    createChatBotMessage(`Hi, What recipe are you looking for?`),
  ],
  widgets: [
    {
      widgetName: "Recipe",
      widgetFunc: (props) => <RecipeComponent {...props} />,
      mapStateToProps: ['messages'],
    },
  ],
};

export default config;
