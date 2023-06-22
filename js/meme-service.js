'use strict'

var gImgs = [
  { id: 1, url: 'imgs/1.jpg', keywords: ['keyword1', 'keyword1'] },
  { id: 2, url: 'imgs/2.jpg', keywords: ['keyword2', 'keyword2'] },
  { id: 3, url: 'imgs/3.jpg', keywords: ['keyword3', 'keyword3'] },
  { id: 4, url: 'imgs/4.jpg', keywords: ['keyword4', 'keyword4'] },
]

var gMeme = {
  selectedImgId: null,
  selectedLineIdx: null,
  lines: [
    { txt: '', size: 0, color: '' }
  ]
}

var gKeywordSearchCountMap = {}