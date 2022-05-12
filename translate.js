function Translate(word, language) {
  this.apiKey = 'AIzaSyCtz1hX6jIXk2zTVjntgzLwTEbSAIIiiEs'
  this.word = word
  this.language = language

  // XHR objesi
  this.xhr = new XMLHttpRequest()
}

Translate.prototype.translateWord = function (Callback) {
  //arrow function kullanılırsa this window'u gösterecektir.

  //Ajax işlemi
  const endpoint = `https://translation.googleapis.com/language/translate/v2/?q=${this.word}&source=tr&target=${this.language}&key=${this.apiKey}`

  this.xhr.open('GET', endpoint)
  this.xhr.onload = () => {
    if (this.xhr.status === 200) {
      const text = JSON.parse(this.xhr.responseText).data.translations[0]
        .translatedText
      Callback(null, text)
    } else {
      Callback('Bir hata oluştu', null)
    }
  }

  this.xhr.send()
}

Translate.prototype.changeParameters = function (newWord, newLanguage) {
  this.word = newWord
  this.language = newLanguage
}
