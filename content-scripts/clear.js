(() => {

  let running = false

  if (running) {
    console.log('Script already loaded!')
    return
  }

  let words

  browser.runtime.onMessage.addListener(request => {

    const posts = Array.from(document.querySelectorAll('[data-id*="urn:li:activity"]'))

    let storedWords = localStorage.getItem('words')

    words = request.words ? request.words : storedWords

    words = words ? words : []

    localStorage.setItem('words', words)

    console.log(`Clearing posts: ${words}`)

    words.forEach(word => {
      for (let post of posts) {
        if (post.innerHTML.includes(word)) {
          post.remove()
        }
      }
    })

    return Promise.resolve({ response: "Words removed!" });
  });
})()