/**
@param {string} selector
@return {{css: Function}}
*/
export default function $(selector) {
  return {
    css: function (prop, value) {
      const ele = document.querySelector(selector);
      if (arguments.length === 1) {
        const v = ((ele || {}).style || {})[prop] || "";
        return v.length ? v : undefined;
      }
      if (arguments.length >= 2) {
        if (ele) {
          ele.style[prop] = value;
        }
        return this;
      }
      return this;
    },
  };
}
