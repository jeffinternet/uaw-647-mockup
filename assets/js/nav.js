function toggleDropdown(el){
  // Desktop / full-screen (viewport wider than the mobile breakpoint):
  // the dropdown is shown purely by CSS :hover. Clicking should do nothing,
  // so it can never get "stuck open" as a toggle on top of hover.
  var isDesktopWidth = window.matchMedia('(min-width: 861px)').matches;
  if (isDesktopWidth) {
    return;
  }
  // Mobile / hamburger menu (narrow viewport): there's no hover at all here,
  // so a tap has to explicitly open/close the dropdown.
  var li = el.parentElement;
  li.classList.toggle('open');
}
document.addEventListener('click', function(e){
  document.querySelectorAll('.navlinks > li.has-dropdown.open').forEach(function(li){
    if (!li.contains(e.target)){ li.classList.remove('open'); }
  });
});
