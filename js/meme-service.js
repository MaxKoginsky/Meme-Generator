var MemeService = (function() {
    var gImgs = [
        { id: 1, url: 'imgs/1.jpg', keywords: ['keyword1', 'keyword1'] },
        { id: 2, url: 'imgs/2.jpg', keywords: ['keyword2', 'keyword2'] },
        { id: 3, url: 'imgs/3.jpg', keywords: ['keyword3', 'keyword3'] },
        { id: 4, url: 'imgs/4.jpg', keywords: ['keyword4', 'keyword4'] },
        { id: 5, url: 'imgs/5.jpg', keywords: ['keyword5', 'keyword5'] },
        { id: 6, url: 'imgs/6.jpg', keywords: ['keyword6', 'keyword6'] },
        { id: 7, url: 'imgs/7.jpg', keywords: ['keyword7', 'keyword7'] },
        { id: 8, url: 'imgs/8.jpg', keywords: ['keyword8', 'keyword8'] },
        { id: 9, url: 'imgs/9.jpg', keywords: ['keyword9', 'keyword9'] },
        { id: 10, url: 'imgs/10.jpg', keywords: ['keyword10','keyword10'] },
        { id: 11, url: 'imgs/11.jpg', keywords: ['keyword11','keyword11'] },
        { id: 12, url: 'imgs/12.jpg', keywords: ['keyword12', 'keyword12'] },
        { id: 13, url: 'imgs/13.jpg', keywords: ['keyword13', 'keyword13'] },
        { id: 14, url: 'imgs/14.jpg', keywords: ['keyword14','keyword14'] },
        { id: 15, url: 'imgs/15.jpg', keywords: ['keyword15','keyword15'] },
        { id: 16, url: 'imgs/16.jpg', keywords: ['keyword16','keyword16'] },
        { id: 17, url: 'imgs/17.jpg', keywords: ['keyword17','keyword17'] },
        { id: 18, url: 'imgs/18.jpg', keywords: ['keyword18','keyword18'] },
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