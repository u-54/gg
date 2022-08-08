// const Ulula = confirm('Ты любишь Зелень?')
// console.log(Ulula)
// if (Ulula==true) {
//     document.getElementById('1500a').innerHTML = 'A'
// } else {
//     document.getElementsByClassName('g')[0].style.backgroundColor = 'green'
// }
const fr = document.getElementsByClassName('Fr')[0]
const button = document.getElementById('123ad')

const f = () => {
    fr.play()
}
button.addEventListener('click', f )
