import React, { useEffect } from "react";
import { getDialogFlowResponse } from "../../utils/apiService";
import { CircularProgress } from "@mui/material";
import "./index.css";

const RecipeComponent = (props) => {
  const [userMessage, setUserMessage] = React.useState(null);
  const { messages } = props;

  useEffect(() => {
    const lastUserObject = messages.filter(message => message.type === 'user')
    const lastUserObjectMessage = lastUserObject.pop()
    const dataObj = {
      languageCode: "en-US",
      queryText: `${lastUserObjectMessage.message}`,
      sessionId: `${lastUserObjectMessage.id}`,
    };

    getDialogFlowResponse(dataObj)
      .then((response) => {
        const { data, status } = response;
        if (status === 200 || status === 201) {
          setUserMessage(data.data);
        }
      })
      .catch((error) => console.log({ error }));
  }, []);

  return (
    <div>
      <div className="recipe-box">
        {!userMessage ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress color="inherit" />
          </div>
        ) : (
          <p>{userMessage}</p>
        )}
      </div>
    </div>
  );
};
export default RecipeComponent;
