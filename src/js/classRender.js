export class ClassRender {
  constructor() {
    this._refs = {
      body: document.body,
      main: document.createElement('main'),
      header: document.createElement('header'),
    };
  }

  get refs() {
    // return ClassRender.refs;
    return this._refs;
  }

  set refs({name, node}) {
    // return (ClassRender.refs[name] = node);
    this._refs[name] = node;
  }

  renderMarkup = (parentNode, tmp, data = null) => {
    const d = data ? data : null;
    const markup = tmp(d);
    parentNode.insertAdjacentHTML('afterbegin', markup);
  };
}

const render = new ClassRender();

export default render;
