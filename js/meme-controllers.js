var MemeController = (function(MemeService) {
    var selectedImagePath = ''
    var enteredText = ''
    var fontSize = 36
    var textColor = '#ffffff'
    var lines = []
    var selectedFont = 'Arial'
    var strokeColor = '#000000'
    var selectedLineIndex = null;
    var canvas = document.querySelector('.canvas')
    var ctx = canvas.getContext('2d')

    function changeStrokeColor() {
        var colorPicker = document.getElementById('strokeColorPicker')
        strokeColor = colorPicker.value
        renderMeme(selectedImagePath)
    }

    function clearText() {
        enteredText = ''
        renderMeme(selectedImagePath)
    }

    function changeFont() {
        var fontSelect = document.querySelector('.font-select')
        selectedFont = fontSelect.value
        renderMeme(selectedImagePath)
    }

    function addText() {
        var textInput = document.querySelector('.text-input')
        enteredText = textInput.value
        addLine()
        textInput.value = ''
        enteredText = ''
    }

    function addLine() {
        var line = {
            txt: enteredText,
            size: fontSize,
            color: textColor,
            font: selectedFont,
            x: canvas.width / 2,
            y: lines.length * 60 + 50,
            width: 0,
            height: 0
        }
        lines.push(line)
        MemeService.addLine(line)
        renderMeme(selectedImagePath)
    }

    function renderMeme(imagePath) {

        selectedImagePath = imagePath
    
        var image = new Image()
    
        image.onload = function() {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
    
            lines.forEach(function(line) {
                ctx.font = line.size + 'px ' + line.font
                ctx.fillStyle = line.color
                ctx.strokeStyle = strokeColor
                ctx.lineWidth = 2
                ctx.textAlign = 'center'
    
                var textX = line.x
                var textY = line.y
                
                ctx.strokeText(line.txt, textX, textY)
                ctx.fillText(line.txt, textX, textY)
            })
            
            ctx.font = fontSize + 'px ' + selectedFont
            ctx.fillStyle = textColor
            ctx.strokeStyle = strokeColor
            ctx.textAlign = 'center'
            ctx.strokeText(enteredText, canvas.width / 2, lines.length * 60 + 50)
            ctx.fillText(enteredText, canvas.width / 2, lines.length * 60 + 50)
        }
    
        image.src = imagePath
    } 

    function increaseFontSize() {
        fontSize += 2
        renderMeme(selectedImagePath)
    }

    function decreaseFontSize() {
        if(fontSize > 2){
            fontSize -= 2
        }
        renderMeme(selectedImagePath)
    }

    function getText() {
        return enteredText
    }

    function changeTextColor() {
        var colorPicker = document.getElementById('colorPicker')
        textColor = colorPicker.value
        renderMeme(selectedImagePath)
    }  

    function showEditor(imagePath) {
        var gallerySection = document.querySelector('.gallery')
        var editorSection = document.querySelector('.editor')

        gallerySection.classList.add('hidden')
        editorSection.classList.remove('hidden')

        selectedImagePath = imagePath
        renderMeme(selectedImagePath)
    }

    function handleTextInput() {
        enteredText = document.querySelector('.text-input').value
        renderMeme(selectedImagePath)
    }

    document.querySelector('.text-input').addEventListener('input', handleTextInput)

    canvas.addEventListener('mousedown', function(event) {
        var rect = canvas.getBoundingClientRect()
        var x = event.clientX - rect.left
        var y = event.clientY - rect.top
        selectedLineIndex = getSelectedLineIndex(x, y)
    });

    canvas.addEventListener('mousemove', function(event) {
        if (selectedLineIndex != null) {
            var rect = canvas.getBoundingClientRect()
            var x = event.clientX - rect.left
            var y = event.clientY - rect.top
            lines[selectedLineIndex].x = x
            lines[selectedLineIndex].y = y
            renderMeme(selectedImagePath)
        }
    })

    canvas.addEventListener('mouseup', function(event) {
        selectedLineIndex = null
    })

    function getSelectedLineIndex(x, y) {
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i]
            var textWidth = ctx.measureText(line.txt).width
            var textHeight = line.size
            if (x >= line.x - textWidth / 2 && x <= line.x + textWidth / 2 &&
                y >= line.y - textHeight && y <= line.y) {
                return i
            }
        }
        return null
    }

    return {
        addText: addText,
        increaseFontSize: increaseFontSize,
        decreaseFontSize: decreaseFontSize,
        changeTextColor: changeTextColor,
        getText: getText,
        renderMeme: renderMeme,
        showEditor: showEditor,
        addLine: addLine,
        changeFont: changeFont,
        clearText: clearText,
        changeStrokeColor: changeStrokeColor
    }
})(MemeService)