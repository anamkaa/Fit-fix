export const filterBySearch = (videos, bySearch) => {
  if (bySearch) {
    return [...videos].filter((item) => {
      return (
        item.title.toLowerCase().includes(bySearch) ||
        item.creator.toLowerCase().includes(bySearch)
      );
    });
  }
  return videos;
};
