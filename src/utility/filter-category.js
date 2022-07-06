export const filterByCategory = (videos, byCategory) => {
  if (byCategory) {
    if (byCategory === "yoga") {
      return [...videos].filter((item) => item.categoryName === "yoga");
    }
    if (byCategory === "pilates") {
      return [...videos].filter((item) => item.categoryName === "pilates");
    }
    if (byCategory === "cardio") {
      return [...videos].filter((item) => item.categoryName === "cardio");
    }
    if (byCategory === "strength") {
      return [...videos].filter((item) => item.categoryName === "strength");
    }
    if (byCategory === "all") {
      return videos;
    }
  }

  return videos;
};
