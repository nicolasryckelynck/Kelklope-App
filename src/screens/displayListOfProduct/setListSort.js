export const setListSort = (trie, setListOfSort) => {
  switch (trie) {
    case 1:
      setListOfSort("Croissant");
      break;
    case 2:
      setListOfSort("Décroissant");
      break;
    case 3:
      setListOfSort("Pertinent");
      break;
    default:
      setListOfSort("");
  }
};
