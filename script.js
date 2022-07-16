const submitEl = document.querySelector('#submit')
const paragraphEl = document.querySelector('#advice')
const adviceIdEl = document.querySelector('#advice-id')

submitEl.addEventListener('click', rollTheDice);

const APIURL = "https://api.adviceslip.com/advice"

getAdvice(APIURL)

async function getAdvice(apiurl) {
    const resp = await fetch(apiurl)
    const respData = await resp.json()
    rollTheDice(respData.slip)
}

function rollTheDice(data) {
    // adviceIdEl.innerHTML = ""
    // paragraphEl.innerHTML = ""
    adviceIdEl.innerHTML = `advice # ${data.id}`
    paragraphEl.innerHTML = `${data.advice}`
}




