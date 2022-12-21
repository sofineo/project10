const buttonPlay = document.querySelector(".play")
const buttonPause = document.querySelector(".pause")
const buttonStop = document.querySelector(".stop")
const buttonAdd = document.querySelector(".add")
const buttonDeduct = document.querySelector(".deduct")
const buttonUnmuted = document.querySelector(".unmuted")
const buttonMuted = document.querySelector(".muted")

const buttonFlorestSound = document.querySelector(".florest")
const svgFlorestSound = document.querySelector(".florestsvg")
const buttonRainSound = document.querySelector(".rain")
const svgRainSound = document.querySelector(".rainsvg")
const buttonCoffeeshopSound = document.querySelector(".coffeeshop")
const svgCoffeeshopSound = document.querySelector(".coffeeshopsvg")
const buttonFireplaceSound = document.querySelector(".fireplace")
const svgFireplaceSound = document.querySelector(".fireplacesvg")

const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")

const buttonAudio = new Audio ('./Audios/audiobutton.wav')
const timerUpAudio = new Audio ('./Audios/timerUp.mp3')
const FlorestAudio = new Audio ('./Audios/Floresta.wav')
const RainAudio = new Audio ('./Audios/Chuva.wav')
const CoffeeshopAudio = new Audio ('./Audios/Cafeteria.wav')
const FireplaceAudio = new Audio ('./Audios/Lareira.wav')

let timer;

  buttonPlay.addEventListener('click', () => {
  buttonAudio.play()
  if (minutesDisplay.textContent <= 0 && secondsDisplay.textContent <= 0) {
    } else {
      toggleHide(buttonPlay, buttonPause)
      countDown()
    }
  })
  buttonPause.addEventListener('click', () => {
    toggleHide(buttonPlay, buttonPause)
    buttonAudio.play()
    pauseCountDown()
  })
  buttonStop.addEventListener('click', () => {
    buttonAudio.play()
    resetCountDown()
  })
  buttonAdd.addEventListener('click', () => {
    buttonAudio.play()
    addFiveMinutes()
  })
  buttonDeduct.addEventListener('click', () => {
    buttonAudio.play()
    deductFiveMinutes()
  })

  buttonUnmuted.addEventListener('click', () => {
    toggleHide(buttonUnmuted, buttonMuted)
    FlorestAudio.muted = true
    RainAudio.muted = true
    CoffeeshopAudio.muted = true
    FireplaceAudio.muted = true
    buttonAudio.muted = true
    timerUpAudio.muted = true
  })

  buttonMuted.addEventListener('click', () => {
    toggleHide(buttonUnmuted, buttonMuted)
    FlorestAudio.muted = false
    RainAudio.muted = false
    CoffeeshopAudio.muted = false
    FireplaceAudio.muted = false
    buttonAudio.muted = false
    timerUpAudio.muted = false
  })

  buttonFlorestSound.addEventListener('click', () => {
    buttonFlorestSound.classList.add('selected')
    svgFlorestSound.classList.add('selected')
    FlorestAudio.play()
    FlorestAudio.loop = true
    buttonRainSound.classList.remove('selected')
    svgRainSound.classList.remove('selected')
    RainAudio.pause()
    buttonCoffeeshopSound.classList.remove('selected')
    svgCoffeeshopSound.classList.remove('selected')
    CoffeeshopAudio.pause()
    buttonFireplaceSound.classList.remove('selected')
    svgFireplaceSound.classList.remove('selected')
    FireplaceAudio.pause()
  })
  buttonRainSound.addEventListener('click', () => {
    buttonRainSound.classList.add('selected')
    svgRainSound.classList.add('selected')
    RainAudio.play()
    RainAudio.loop = true
    buttonFlorestSound.classList.remove('selected')
    svgFlorestSound.classList.remove('selected')
    FlorestAudio.pause()
    buttonCoffeeshopSound.classList.remove('selected')
    svgCoffeeshopSound.classList.remove('selected')
    CoffeeshopAudio.pause()
    buttonFireplaceSound.classList.remove('selected')
    svgFireplaceSound.classList.remove('selected')
    FireplaceAudio.pause()
  })
  buttonCoffeeshopSound.addEventListener('click', () => {
    buttonCoffeeshopSound.classList.add('selected')
    svgCoffeeshopSound.classList.add('selected')
    CoffeeshopAudio.play()
    CoffeeshopAudio.loop = true
    buttonFlorestSound.classList.remove('selected')
    svgFlorestSound.classList.remove('selected')
    FlorestAudio.pause()
    buttonRainSound.classList.remove('selected')
    svgRainSound.classList.remove('selected')
    RainAudio.pause()
    buttonFireplaceSound.classList.remove('selected')
    svgFireplaceSound.classList.remove('selected')
    FireplaceAudio.pause()
  })
  buttonFireplaceSound.addEventListener('click', () => {
    buttonFireplaceSound.classList.add('selected')
    svgFireplaceSound.classList.add('selected')
    FireplaceAudio.play()
    FireplaceAudio.loop = true
    buttonFlorestSound.classList.remove('selected')
    svgFlorestSound.classList.remove('selected')
    FlorestAudio.pause()
    buttonRainSound.classList.remove('selected')
    svgRainSound.classList.remove('selected')
    RainAudio.pause()
    buttonCoffeeshopSound.classList.remove('selected')
    svgCoffeeshopSound.classList.remove('selected')
    CoffeeshopAudio.pause()
  })

  function toggleHide(button1, button2) {
    button1.classList.toggle('hide')
    button2.classList.toggle('hide')
  }

  function addFiveMinutes() {  const timerMinutes = Number(minutesDisplay.textContent)
    const newTimerMinutes = timerMinutes + 5
    if (newTimerMinutes >= 100) {
      return minutesDisplay.textContent = 99
    }
    minutesDisplay.textContent = String(newTimerMinutes).padStart(2,"0")
  }

  function deductFiveMinutes() {
    const timerMinutes = Number(minutesDisplay.textContent)
    const newTimerMinutes = timerMinutes - 5
    if (newTimerMinutes <= 0) {
      return minutesDisplay.textContent = "00"
    }
    minutesDisplay.textContent = String(newTimerMinutes).padStart(2,"0")
  }

  function countDown () {
    timer = setTimeout(() => {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)

      if (minutes <= 0 && seconds <= 0) {
        pauseCountDown()
        resetCountDown()
      }

      if (seconds <= 0) {
        seconds = 2
        minutesDisplay.textContent = String(minutes -1).padStart(2,"0")      
      }
      secondsDisplay.textContent = String(seconds - 1).padStart(2,"0")
      
      if (minutes <= 0) {
        toggleHide(buttonPlay, buttonPause)
        timerUpAudio.play()
        return
      }
      
      countDown()
      }, 1000)
  }

  function pauseCountDown () {
    clearTimeout(timer)
  }

  function resetCountDown () {
    pauseCountDown()
    secondsDisplay.textContent = "00"
    minutesDisplay.textContent = "00"
  }