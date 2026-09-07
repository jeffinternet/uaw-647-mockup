function toggleDropdown(el){
  var li = el.parentElement;
  li.classList.toggle('open');
}
document.addEventListener('click', function(e){
  document.querySelectorAll('.navlinks > li.has-dropdown.open').forEach(function(li){
    if (!li.contains(e.target)){ li.classList.remove('open'); }
  });
});
