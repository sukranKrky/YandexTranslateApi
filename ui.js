function UI() {
  this.outputImage = document.getElementById('outputImage')
  this.outputLanguage = document.getElementById('outputLanguage')
  this.outputWord = document.getElementById('outputWord')
  this.languageList = document.getElementById('language')
}
UI.prototype.changeUI = function () {
  //Arayüz
  //   tihs.outputImage.src = `images/${this.languageList.value}.png`
  //   console.log(this.languageList.options[this.languageList.selectedIndex])
  //     .textContent
  this.outputImage.src = `images/${this.languageList.value}.png`
  this.outputLanguage.innerHTML = this.languageList.options[
    this.languageList.selectedIndex
  ].textContent
}

UI.prototype.displayTranslate = function (word) {
  this.outputWord.textContent = word
}
