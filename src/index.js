function getHighestZIndex(domNode) {
  var highestZIndex = 0
  var currentZIndex = 0
  var nodes = domNode.getElementsByTagName('*')

  for (var i = 0; i < nodes.length; i++) {
    currentZIndex = Number(window.getComputedStyle(nodes[i]).zIndex)
    if (currentZIndex > highestZIndex) {
      highestZIndex = currentZIndex
    }
  }

  return highestZIndex
}
