const TARGET = "https://www.linkedin.com/voyager/api/feed/updatesV2*"

async function requestHandler(event) {

  let tabs = await browser.tabs.query({
    currentWindow: true,
    active: true
  })

  for (let tab of tabs) {
    await browser.tabs.sendMessage(
      tab.id,
      {
        from: "background"
      }
    )
  }
}

browser.webRequest.onCompleted.addListener(
  requestHandler,
  { urls: [TARGET] }
)
