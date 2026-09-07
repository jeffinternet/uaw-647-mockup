function toggleDropdown(el){
  // On devices with real hover (mouse/trackpad), the dropdown is shown/hidden
  // purely by CSS :hover — clicking should do nothing extra, so it never gets
  // "stuck open" as a toggle on top of hover.
  var hasRealHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (hasRealHover) {
    return;
  }
  // Touch devices (including the mobile hamburger menu) have no hover at
  // all, so a tap has to explicitly open/close the dropdown instead.
  var li = el.parentElement;
  li.classList.toggle('open');
}
document.addEventListener('click', function(e){
  document.querySelectorAll('.navlinks > li.has-dropdown.open').forEach(function(li){
    if (!li.contains(e.target)){ li.classList.remove('open'); }
  });
});
