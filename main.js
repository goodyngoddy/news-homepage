let body = document.querySelector('body')
let navBarBtn = document.querySelector('#nav-bar-btn')

let otherItemContainer = document.querySelector('.other-item-container')
let bottom = document.querySelector('.bottom')

navBarBtn.addEventListener('click', () => {
  body.classList.toggle('nav-active')
})

let otherObj = {
  otherOne: {
    title: 'Hydrogen VS Electric Cars',
    detail: 'Will hydrogen-fueled cars ever catch up to EVs?'
  },
  otherTwo: {
    title: 'The Downsides of AI Artistry',
    detail: 'What are the possible adverse effects of on-demand AI image generation?'
  },
  otherThree: {
    title: 'Is VC Funding Drying Up?',
    detail: 'Private funding by VC firms is down 50 % YOY.We take a look at what that means.'
  }
}

let bottomObj = {
  itemOne : {
    img: 'assets/images/image-retro-pcs.jpg',
    number: 1,
    title: 'Reviving Retro PCs',
    detail: 'What happens when old PCs are given modern upgrades?'
  },
  itemTwo : {
    img: 'assets/images/image-top-laptops.jpg',
    number: 2,
    title: 'Top 10 Laptops of 2022',
    detail: 'Our best picks for various needs and budgets.'
  },
  itemThree : {
    img: 'assets/images/image-gaming-growth.jpg',
    number: 3,
    title: 'The Growth of Gaming',
    detail: 'How the pandemic has sparked fresh opportunities.'
  }
}

function objKey(obj) {
  objKeys = Object.keys(obj)
  console.log(objKeys)
  return objKeys
}
function getValue(obj, n) {
  return obj[Object.keys(obj)[n]]
}
function setOther() {
  objKey(otherObj)
  for (let i = 0; i < 3; i++) {
    console.log(getValue(otherObj, i).title)
  }
  for (var i = 0; i < objKeys.length; i++) {
    otherItemContainer.innerHTML += `
      <div class="other-item">
        <div class="other-item-title">
          ${getValue(otherObj, i).title}
        </div>
        <div class="other-data">
          ${getValue(otherObj, i).detail}
        </div>
      </div>`
  }
}
function setBottom() {
  objKey(bottomObj)
  for (var i = 0; i < objKeys.length; i++) {
    bottom.innerHTML += `
      <div class="bottom-item">
        <div class="bottom-img">
          <img src="${getValue(bottomObj, i).img}">
        </div>
        <div class="bottom-text">
          <div class="number">
            0${getValue(bottomObj, i).number}
          </div>
          <div class="bottom-item-title">
            ${getValue(bottomObj, i).title}
          </div>
          <div class="detail">
            ${getValue(bottomObj, i).detail}
          </div>
        </div>
      </div>`
  }
}
setOther()
setBottom()






