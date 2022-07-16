const diceEl = document.querySelector(`#dice`)
const paragraphEl = document.querySelector(`#advice`)
const adviceIdEl = document.querySelector(`#advice-id`)
const APIURL = `https://api.adviceslip.com/advice`

getAdvice()

async function getAdvice() {
    const resp = await fetch(APIURL)
    const respData = await resp.json()
    adviceIdEl.innerText = `advice # ${respData.slip.id}`
    paragraphEl.innerText = `"${respData.slip.advice}"`
}

diceEl.addEventListener(`click`, getAdvice)





