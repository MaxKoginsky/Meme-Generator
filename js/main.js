'use strict'

function onInit(){
    console.log ('Hello')
}

// function setImage(imageSrc) {
//     var canvas = document.querySelector('.canvas')
//     var context = canvas.getContext('2d')

//     var image = new Image()
//     image.onload = function() {
//         context.drawImage(image, 0, 0, canvas.width, canvas.height)
//     }
//     image.src = imageSrc
// }

//controller//

var selectedImagePath = ''

  function addText() {
    var textInput = document.querySelector('.text-input')
    var text = textInput.value
    renderMeme(selectedImagePath, text)

    textInput.value = ''
  }

function renderMeme(imagePath, text) {
    var canvas = document.querySelector('.canvas')
    var ctx = canvas.getContext('2d')

    selectedImagePath = imagePath
  
    // Clear the canvas
    // ctx.clearRect(0, 0, canvas.width, canvas.height)
  
    var image = new Image()
  
    image.onload = function() {
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height)

    //   var text = prompt('Enter text for the meme:', 'Your text here')
  
    if (text) {
        ctx.font = '36px Arial'
        ctx.fillStyle = '#ffffff'
        ctx.strokeStyle = '#000000'
        ctx.lineWidth = 2
        ctx.textAlign = 'center'
  
      var textX = canvas.width / 2
      var textY = 50

      ctx.strokeText(text, textX, textY)
      ctx.fillText(text, textX, textY)
    }
  }
  
    image.src = imagePath
}


//service//

