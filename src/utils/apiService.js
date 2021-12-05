import axios from "axios";
export const getDialogFlowResponse = async (data) => {
  const res = await axios({
    method: "post",
    url: "https://chatbot-server-sample.herokuapp.com/dialogflow-response",
    data: data,
  });

  return res
};
