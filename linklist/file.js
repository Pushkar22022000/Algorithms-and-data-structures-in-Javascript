class Node {
    constructor(data, next = null) {
      this.data = data
      this.next = next
    }
  }
  
  
  class LinkedList {
    constructor() {
      this.head = null
      this.size = 0
    }
  
    
    insertFirst(data) {
      this.head = new Node(data, this.head)
      this.size++
    }
  
    
    insertLast(data) {
      let node = new Node(data)
      let current
  
      
      if (!this.head) {
        this.head = node
      } else {
        current = this.head
  
        while (current.next) {
          current = current.next
        }
  
        current.next = node
      }
  
      this.size++
    }
  
    
    insertAt(data, index) {
      if (index > 0 && index > this.size) {
        return
      }
  
      
      if (index === 0) {
        this.insertFirst(data)
        return
      }
  
      const node = new Node(data)
      let current = this.head
      let count = 0
      let previous
  
      while (count < index) {
        previous = current
        count++
        current = current.next
      }
  
      node.next = current
      previous.next = node
  
      this.size++
    }

    printListData() {
      let current = this.head
  
      while (current) {
        console.log(current.data)
        current = current.next
      }
    }
  }
  
  const linklist = new LinkedList()
  
  linklist.insertFirst(100)
  linklist.insertFirst(200)
  linklist.insertFirst(300)
  linklist.insertLast(400)
  
  
  
  linklist.printListData()