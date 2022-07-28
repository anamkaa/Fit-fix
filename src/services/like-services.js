import axios from "axios";

export const addToLikeService = async (video, token, likesDispatch) => {
  try {
    const response = await axios.post(
      "/api/user/likes",
      { video },
      { headers: { authorization: token } }
    );
    likesDispatch({ type: "ADD_TO_LIKES", payload: response.data.likes });
  } catch (error) {
    console.log(error.message);
  }
};

export const removeFromLikeService = async (videoId, token, likesDispatch) => {
  try {
    const response = await axios.delete(`/api/user/likes/${videoId}`, {
      headers: { authorization: token },
    });
    likesDispatch({ type: "REMOVE_FROM_LIKES", payload: response.data.likes });
  } catch (error) {
    console.log(error.message);
  }
};
