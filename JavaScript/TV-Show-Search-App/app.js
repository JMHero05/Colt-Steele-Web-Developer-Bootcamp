const form = document.querySelector('#searchForm');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  const res = await axios.get(
    `http://api.tvmaze.com/search/shows?q=${searchTerm}`
  );
  displayImages(res.data);
  form.elements.query.value = '';
});

const displayImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement('img');
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};
