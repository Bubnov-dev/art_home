const openMenu = () => {
  const btn = document.getElementById('menu-button');
  const root = document.getElementById('root');
  root.innerHTML = `
    <div id="menu" class="first-menu first-menu-anim">
      <div class="menu-grid">
        <div class="menu-header">
        <!--TODO grid-->
          <div class="menu-title">Каталог товаров</div>
          <div class="arrow" id="arrow"><img alt="arrow" src="assets/header/mobile/arrow.svg"></div>
          <hr class="grey-divider">
        </div>
        <div class="links">
          <a>Продукция и товары</a>
        </div>
        <div class="links">
          <a>Как заказать</a>
        </div>
        <div class="links">
          <a>Оплата и доставка</a>
        </div>
        <div class="links">
          <a>О нас</a>
        </div>
        <div  class="links">
          <a>Контакты</a>
        </div>
        <div class="pink-link links">
          <a>Личный кабинет</a>
        </div>
      </div> <!--.menu-grid-->
      <hr class="grey-divider">
      <div class="social-icons">
        <img alt="instagram" src="assets/header/mobile/instagram.svg">  
        <img alt="vk" src="assets/header/mobile/vk.svg">  
      </div> <!--.social-icons-->
      <div class="contacts">
        <span><a href="tel: 8 800 333-37-35">8 800 333-37-35</a></span>
        <span><a href="tel: +7 (921) 574-37-35">+7 (921) 574-37-35</a></span>
        <div>Мы работаем ПН-ПТ с 10-18</div> 
      </div> <!--.contacts-->
    </div> <!--.first-menu-->
    `;

  const secondMenu = () => {
    const menu = document.getElementById('menu');
    menu.classList.remove('first-menu-anim');
    menu.classList.add('first-menu-anim-reverse');
    setTimeout(() => menu.classList.add('minus'), 800);
    setTimeout(openSecondMenu, 850);
  }

  const openSecondMenu = () => {
    const root = document.getElementById('root');
    root.innerHTML = `
      <div id="menu" class="first-menu first-menu-anim small-menu">
        <div class="menu-grid">
          <div class="menu-header inline-grid">
            <div class="arrow-reverse" id="arrow-rev" onclick="document.getElementById('root').innerHTML=''; openMenu()"><img alt="arrow" src="assets/header/mobile/arrow.svg"></div>
            <div class="menu-title-rev">Весь каталог</div>
            <div class="cross-icon" id="cross" onclick="document.getElementById('root').innerHTML=''"><img src="assets/header/mobile/cross.svg" alt="cross"></div>
          </div>
          <hr class="grey-divider">
          <div class="links">
            <a>Постеры</a>
          </div>
          <div class="links">
            <a>Гобелены</a>
          </div>
          <div class="links">
            <a>Модульные картины</a>
          </div>
          <div class="links">
            <a>Багеты</a>
          </div>
          <div class="pink-link-disc links">
            <a>Акции</a>
          </div>
        </div> <!--.menu-grid-->
        <hr class="grey-divider">
        <div class="contacts links">
          <div class="links"><a>Картина из моего файла</a></div> 
        </div> <!--.contacts-->
      </div> <!--.first-menu-->
  `;
  }

  const arrow_btn = document.getElementById('arrow');
  arrow_btn.addEventListener('click', secondMenu);
}
const btn = document.getElementById('menu-button');
btn.addEventListener('click', openMenu);

const search = document.getElementById('search');
const close = document.getElementById('close');
const back = document.getElementById('back');
const search_input = document.querySelector('.search-mobile');
const header_elem = document.querySelector('.mobile-header-grid');

search.addEventListener('click', () => {
  header_elem.classList.add('mobile-grid')
  search_input.classList.add('search-grid')
})

close.addEventListener('click', () => {
  document.getElementById('search-m').value = '';
})

back.addEventListener('click', () => {
  header_elem.classList.remove('mobile-grid')
  search_input.classList.remove('search-grid')
})