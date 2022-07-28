import axios from "axios";

export const addToWatchlaterService = async (
  video,
  token,
  watchlaterDispatch
) => {
  try {
    const response = await axios.post(
      `/api/user/watchlater`,
      { video },
      {
        headers: { authorization: token },
      }
    );
    watchlaterDispatch({
      type: "GET_WATCHLATER",
      payload: response.data.watchlater,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const removeFromWatchlaterService = async (
  videoId,
  token,
  watchlaterDispatch
) => {
  try {
    const response = await axios.delete(`/api/user/watchlater/${videoId}`, {
      headers: { authorization: token },
    });
    watchlaterDispatch({
      type: "GET_WATCHLATER",
      payload: response.data.watchlater,
    });
  } catch (error) {
    console.log(error.message);
  }
};
