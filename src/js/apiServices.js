import axios from 'axios';

class ApiServices {
  #key_api = '13965574-3ae6669f35304ffc6cddc1b72';

  #params = {
    query: '',
    page: 1,
  };

  constructor() {
    axios.defaults.baseURL = 'https://pixabay.com/api/';
  }

  get query() {
    return this.#params.query;
  }

  set query(q) {
    this.#params.query = q;
  }

  get page() {
    return this.#params.page;
  }

  set page(p) {
    this.#params.page = p;
  }

  getGalleryItems = () =>
    axios.get(
      `?key=${this.#key_api}&q=${this.query}&image_type=photo&per_page=3&page=${
        this.page
      }`,
    );

  transformImgList = dataList =>
    dataList.map(item => ({
      largeImageURL: item.largeImageURL,
      webformatURL: item.webformatURL,
      tags: item.tags,
    }));
}

const api = new ApiServices();

export default api;
