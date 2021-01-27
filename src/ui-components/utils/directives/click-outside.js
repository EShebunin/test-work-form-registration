const EVENT = 'click-outside';

function bind(el, binding, vnode) {
  unbind(el);

  const vm = vnode.context;
  const callback = binding.value;
  let initialMacrotaskEnded = false;

  setTimeout(() => {
    initialMacrotaskEnded = true;
  }, 0);

  el[EVENT] = function (ev) {
    const path = ev.path || (ev.composedPath ? ev.composedPath() : undefined);
    if (initialMacrotaskEnded && (path ? path.indexOf(el) < 0 : !el.contains(ev.target)) && ev.target.id !== 'ProxyObjectEventForwarder') {
      return callback.call(vm, ev);
    }
  };

  document.documentElement.addEventListener('click', el[EVENT], false);
}

function unbind(el) {
  document.documentElement.removeEventListener('click', el[EVENT], false);
  delete el[EVENT];
}

export default {
  bind,
  unbind,
};
