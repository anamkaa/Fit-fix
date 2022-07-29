import axios from "axios";

export const addToHistoryService = async (video, token, historyDispatch) => {
  try {
    const response = await axios.post(
      "/api/user/history",
      { video },
      {
        headers: { authorization: token },
      }
    );

    historyDispatch({ type: "GET_HISTORY", payload: response.data.history });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteFromHistoryService = async (
  videoId,
  token,
  historyDispatch
) => {
  try {
    const response = await axios.delete(`/api/user/history/${videoId}`, {
      headers: { authorization: token },
    });
    historyDispatch({ type: "GET_HISTORY", payload: response.data.history });
  } catch (error) {
    console.log(error);
  }
};

export const deleteAllHistoryService = async (token, historyDispatch) => {
  try {
    const response = await axios.delete("/api/user/history/all", {
      headers: { authorization: token },
    });

    historyDispatch({ type: "GET_HISTORY", payload: response.data.history });
  } catch (error) {
    console.log(error.message);
  }
};
