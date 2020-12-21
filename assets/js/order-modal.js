
const funShow = () => {
  const someElem = document.getElementById('m-map') //твой айдишник
  someElem.classList.add("vis") //класс показывающий модалку (css)
}

const funHide = () => {
  const someElem = document.getElementById('m-map') //твой айдишник
  someElem.classList.remove("vis") //класс скрывающий модалку (css)
}
document.getElementById("show-m-m").addEventListener("click", funShow);