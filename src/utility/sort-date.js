export const sortByDate = (videos, bySort) => {
  if (bySort) {
    if (bySort === "newest") {
      return [...videos].sort((item1, item2) => {
        return new Date(item2.dateCreated) - new Date(item1.dateCreated);
      });
    }

    if (bySort === "oldest") {
      return [...videos].sort((item1, item2) => {
        return new Date(item1.dateCreated) - new Date(item2.dateCreated);
      });
    }

    if (bySort === "clear") {
      return videos;
    }
  }

  return videos;
};
