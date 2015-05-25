var Find = {
  elementContaining: function (view, text) {
    return view.find("*:contains('" + text + "'):not(:has(*))");
  },

  elementNamed: function (view, name) {
    return view.find('[name=' + name + ']');
  }
};
