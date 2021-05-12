import api from './apiServices';
import render from './classRender';
import imageListTmp from '../tmp/imageList.hbs';
import serchBarTmp from '../tmp/serchBar.hbs';

const { refs, renderMarkup } = render;

refs.body.prepend(refs.header, refs.main);
renderMarkup(refs.header, serchBarTmp);

render.refs = { name: 'form', node: document.getElementById('search-bar') };
render.refs = { name: 'input', node: refs.form.querySelector('input') };

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  if (api.query !== refs.input.value) {
    api.query = refs.input.value;
    api.page = 0;
    refs.main.innerHTML = '';
  }
  api.page += 1;
  api
    .getGalleryItems()
    .then(({ data }) => api.transformImgList(data.hits))
    .then(list => renderMarkup(refs.main, imageListTmp, { list }));
});
