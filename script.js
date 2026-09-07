/* Hedge & Order DEMO — tiny UX helpers */
(function () {
  var year = new Date().getFullYear();
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = year;
  });
})();
