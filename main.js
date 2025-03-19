document.getElementById('time').innerHTML = new Date().toLocaleString()

function pink() {
  document.body.style.backgroundColor = 'pink'
}
function lightblue() {
  document.body.style.backgroundColor = 'lightblue'
}
function yellow() {
  document.body.style.backgroundColor = 'yellow'
}
function reset() {
  document.body.style.backgroundColor = 'linen'
}
function showhtml() {
  document.getElementById('fig').src = 'html.jpg'
  document.getElementById('desc').innerHTML =
    'HTML은 구조적 웹문서를 작성하는데 사용하는 마크업 언어이다'
}
function showcss() {
  document.getElementById('fig').src = 'css.jpg'
  document.getElementById('desc').innerHTML = 'CSS'
}
function showjs() {
  document.getElementById('fig').src = 'js.jpg'
  document.getElementById('desc').innerHTML = '<b>javascript</b>'
}
function hide() {
  document.getElementById('fig').src = ''
  document.getElementById('desc').innerHTML = ''
}
