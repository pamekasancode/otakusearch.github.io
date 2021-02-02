let _query = document.querySelector("#query")
let _link = document.querySelector("#link")
let url = "https://www.google.com/search?q="
let btnTheme = document.querySelector("#theme")
let close = document.querySelector("#close")
let _theme = document.querySelector(".theme")
let img = localStorage.getItem("otaku") || "https://i.ibb.co/mvc5RfT/Kirito-6314.jpg"
let badquery = ["hentai", "nekopoi", "milf", "loli", "mantap mantap", "ecchi", "harem", "doujin", "porn"]

document.body.style.backgroundImage = `url(${img})`
_query.addEventListener("keyup", Query)

function Query(e) {
  if(e.keyCode == 13) {
    let query = _query.value
    filterQuery(query)
  }
}

function filterQuery(query) {
  let q = query.split(" ").join("+")
  const reEscape = s => s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  const re = new RegExp(badquery.map(reEscape).join('|'));
  if(query.toLowerCase().match(re)) {
    alert("Baka!!! Cari yang bener lah ngab!")
    return;
  }
  Search(q)
}

function Search(q) {
  location.href=url+q
}

btnTheme.addEventListener("click", openTheme)

function openTheme() {
  _theme.classList.add("active")
  changeTheme()
  close.addEventListener("click", closeTheme)
}

function closeTheme() {
  _theme.classList.remove("active")
}

function changeTheme() {
  _link.addEventListener("keyup", function(e) {
    if(e.keyCode == 13) {
      let link = _link.value
      localStorage.setItem("otaku", link)
      document.body.style.backgroundImage = `url(${link})`
      closeTheme()
    }
  })
  let covers = document.querySelectorAll(".cover")
  covers.forEach(cover => {
    cover.addEventListener("click", function() {
      let newImg = this.getAttribute("src") 
      localStorage.setItem("otaku", newImg)
      document.body.style.backgroundImage = `url(${newImg})`
      closeTheme()
    })
  })
}
