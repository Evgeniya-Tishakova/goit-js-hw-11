export function getItemsBySearch(searchQuery) {
  return fetch(
    `https://pixabay.com/api/?q=${searchQuery}&key=48211636-c2e7af5b30d3e402d83d1fb79&image_type=photo&orientation=horizontal&safesearch=true&per_page=9`
  );
}
