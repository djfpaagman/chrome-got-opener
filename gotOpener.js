// Create a button that looks nice
let button = document.createElement("button")
button.classList.add("ctaButton")
button.style = "margin-bottom: 15px;"
let label = document.createTextNode("Open alle ongelezen topics")
button.appendChild(label)

// Insert the button on top of the list of bookmarks
var listing = document.getElementsByClassName("listing")[0]
listing.parentNode.insertBefore(button, listing)

// When clicking the button, open all unread topics in new tabs (via background worker)
button.addEventListener("click", function(event) {
  event.preventDefault();

  document.querySelectorAll('img[title="nieuwe reacties"]').forEach(function(topic) {
    let url = topic.parentElement.href;
    chrome.runtime.sendMessage(url);
  })
})
