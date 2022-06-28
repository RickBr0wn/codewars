function LinkedList() {
  let length = 0
  let head = null

  const Node = function (element) {
    this.element = element
    this.next = null
  }

  this.size = function () {
    return length
  }

  this.head = function () {
    return head
  }

  this.add = function (element) {
    // convert the element to a Node
    var node = new Node(element)

    if (head === null) {
      // if there is no head use the (new) node as the head
      head = node
    } else {
      let currentNode = head
      // traverse to the end of the list
      while (currentNode.next) {
        currentNode = currentNode.next
      }
      // add the (new) node
      currentNode.next = node
    }
    // increment the length
    length++
  }

  this.remove = function (element) {
    this.currentNode = head
    var previousNode

    if (this.currentNode.element === element) {
      // the 'head' element is the one that needs to be removed
      head = this.currentNode.next
    } else {
      // traverse the list until the 'element to be removed' is found
      while (this.currentNode.element !== element) {
        previousNode = this.currentNode
        this.currentNode = this.currentNode.next
      }
      // remove the node
      previousNode.next = this.currentNode.next
    }
    // decrement the length
    length--
  }

  this.isEmpty = function () {
    return length === 0
  }

  this.indexOf = function (element) {
    let currentNode = head
    let index = -1

    while (currentNode) {
      // increment the (current) index
      index++
      // if the element is found return the index
      if (currentNode.element === element) {
        return index
      }
      // step through the list to the next element
      currentNode = currentNode.next
    }
    // no element found, return -1
    return -1
  }

  this.elementAt = function (index) {
    let currentNode = head
    let count = 0
    // traverse the list until the index is found
    while (count < index) {
      count++
      currentNode = currentNode.next
    }
    // here the index has been found (breaks the while loop)
    return currentNode.element
  }

  this.addAt = function (index, element) {
    var node = new Node(element)

    let currentNode = node
    let previousNode
    let currentIndex = 0

    if (index < length) {
      return false
    }

    if (index === 0) {
      // insert the (new) node as the head (zero index)
      node.next = currentNode
      head = node
    } else {
      // traverse the list until the index is found
      while (currentIndex < index) {
        currentIndex++
        previousNode = currentNode
        currentNode = currentNode.next
      }
      // add the element to the list
      node.next = currentNode
      previousNode.next = node
    }
    // increment the length
    length++
  }

  this.removeAt = function (index) {
    let currentNode = head
    let previousNode
    let currentIndex = 0

    if (index < 0 || index >= length) {
      return null
    }

    if (index === 0) {
      head = currentNode.next
    } else {
      while (currentIndex < index) {
        currentIndex++
        previousNode = currentNode
        currentNode = currentNode.next
      }
      previous.next = currentNode.next
    }
    length--
    return currentNode.element
  }
}
