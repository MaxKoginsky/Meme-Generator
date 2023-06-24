var MemeService = (function() {
    var gImgs = [
        { id: 1, url: 'imgs/1.jpg', keywords: ['keyword1', 'keyword1'] },
        { id: 2, url: 'imgs/2.jpg', keywords: ['keyword2', 'keyword2'] },
        { id: 3, url: 'imgs/3.jpg', keywords: ['keyword3', 'keyword3'] },
        { id: 4, url: 'imgs/4.jpg', keywords: ['keyword4', 'keyword4'] },
    ];
  
    var gMeme = {
        selectedImgId: null,
        selectedLineIdx: null,
        lines: [
            { txt: '', size: 0, color: '', x: 0, y: 0, width: 0, height: 0 }
        ]
    };
  
    var gKeywordSearchCountMap = {}
  
    return {
        getImages: function() {
            return gImgs
        },
        getMeme: function() {
            return gMeme
        },
        getKeywordSearchCountMap: function() {
            return gKeywordSearchCountMap
        },
        addLine: function(line) {
            gMeme.lines.push(line)
        },
        deleteLine: function(lineIdx) {
            gMeme.lines.splice(lineIdx, 1)
        },
        selectLine: function(lineIdx) {
            gMeme.selectedLineIdx = lineIdx
        },
        updateLine: function(lineIdx, line) {
            gMeme.lines[lineIdx] = line
        }
    }
})()