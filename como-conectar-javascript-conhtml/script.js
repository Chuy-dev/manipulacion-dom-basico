const h1 = document.querySelector('h1')
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular')
const result = document.querySelector('#result')

// form.addEventListener('submit', sumarInputValues)

// function sumarInputValues(event) {
//   // console.log({event})
//   event.preventDefault()
//   const sumaInput = Number(input1.value) + Number(input2.value)

//   result.innerText = 'Resultado: ' + sumaInput
// }

btn.addEventListener('click', sumarInputValues)

function sumarInputValues(event) {
  // console.log({event})
  // event.preventDefault()
  const sumaInput = Number(input1.value) + Number(input2.value)

  result.innerText = 'Resultado: ' + sumaInput
}






// Clases de manipulacion basica
// const p = document.querySelector('p')
// const parrafito = document.getElementsByClassName('parrafito')
// const pId = document.getElementById('pid')
// console.log(input.value);

// console.log({
//   h1,
//   p,
//   parrafito,
//   pId,
//   input,
// });

// h1.innerHTML = 'Patito </br> Feo'
// h1.innerText = 'Patito </br> Feo'
// // console.log(h1.getAttribute('class'));
// // h1.setAttribute('class', 'rojo')

// h1.classList.add('rojo')
// h1.classList.remove('verde')
// // h1.classList.toggle('verde')
// // h1.classList.contains('verde')

// input.value = "456"

// console.log(document.createElement('img'))

// const img = document.createElement('img')

// img.setAttribute('src', 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
// console.log(img);

// pId.innerHTML = ''
// pId.append(img)
