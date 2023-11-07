const addElement = () => {
  const main = document.querySelector("main")
  const button = document.querySelector("button")
  button.addEventListener("click", addElement)

  const p = document.createElement("p")
  p.textContent = "Button Clicked"
  main.appendChild(p)
}

module.exports = {
  addElement,
}
