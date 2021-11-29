import axios from "axios";
export const getDialogFlowResponse = async (data) => {
  const res = await axios({
    method: "post",
    url: "https://movie-sample-app.herokuapp.com/dialogflow-response",
    data: data,
  });

  return res
};
