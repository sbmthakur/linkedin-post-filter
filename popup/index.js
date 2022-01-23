async function handleSubmit(e) {
  e.preventDefault()
  let rawInput = document.getElementById('words').value

  let words = rawInput.split(',')

  let tabs = await browser.tabs.query({
    currentWindow: true,
    active: true
  })


  for (let tab of tabs) {
    await browser.tabs.sendMessage(
      tab.id,
      {
        from: "popup",
        words
      }
    )
  }
}

let form = document.querySelector('form')

form.addEventListener('submit', handleSubmit)
