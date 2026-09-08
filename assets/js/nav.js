function toggleDropdown(el){
  // Two independent things matter here, not one:
  // - viewport width decides which nav LAYOUT is showing (full bar vs. hamburger)
  // - hover-capability decides whether a tap should do anything at all
  //
  // A tap should only be ignored when BOTH are true: the full-width nav bar
  // is showing AND the device has real hover (a mouse/trackpad) — in that
  // case hover alone handles opening/closing. Every other combination
  // (the hamburger menu, or a touch-only device that happens to have a wide
  // enough screen to show the full bar) has no working hover, so a tap has
  // to do the job instead.
  var isDesktopWidth = window.matchMedia('(min-width: 861px)').matches;
  var hasRealHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (isDesktopWidth && hasRealHover) {
    return;
  }
  var li = el.parentElement;
  li.classList.toggle('open');
}
document.addEventListener('click', function(e){
  document.querySelectorAll('.navlinks > li.has-dropdown.open').forEach(function(li){
    if (!li.contains(e.target)){ li.classList.remove('open'); }
  });
});
