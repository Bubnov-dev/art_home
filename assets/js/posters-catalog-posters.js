const show_filters = () => {
  const filter = document.getElementById('filter');
  filter.classList.remove('filter');
  filter.classList.add('filter-abs');
}

const hide_filter = () => {
  const filter = document.getElementById('filter');
  filter.classList.add('filter');
  filter.classList.remove('filter-abs');
}


const changeBg = () => {
  console.log('changed');
  this.classList.add('pink-option');
}

const deleteBg = () => {
  console.log('deleted');
  this.classList.remove('pink-option');
}

const options = document.querySelectorAll('#select_filter option');
options.forEach(key => {
  console.log(key)
  key.addEventListener('mouseover', changeBg)
})
options.forEach(key => key.addEventListener('mouseout', deleteBg))