'use strict'

function onInit(){
    console.log ('Hello')
}

//controller//

var selectedImagePath = ''
var enteredText = ''
var fontSize = 36
var textColor = '#ffffff'
var lines = []

  function addText() {
    var textInput = document.querySelector('.text-input')
    enteredText = textInput.value
    renderMeme(selectedImagePath, enteredText)

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

  
    if (text) {
        ctx.font = fontSize + 'px Arial'
        ctx.fillStyle = textColor
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

function increaseFontSize() {
  fontSize += 2
  renderMeme(selectedImagePath, enteredText)
}

function decreaseFontSize() {
  fontSize -= 2
  renderMeme(selectedImagePath, enteredText)
}

function getText() {
  return enteredText
}

function changeTextColor() {
  var colorPicker = document.getElementById('colorPicker')
  textColor = colorPicker.value
  renderMeme(selectedImagePath, getText())
}




//service//