function Queue() {
    let collection = [];
  
    this.enqueue = function (element) {
      collection.push(element);
    };
  
    this.dequeue = function () {
      collection.shift();
    };
  
    this.front = function () {
      return collection[0];
    };
  
    this.isEmpty = function () {
      return collection.length === 0;
    };
  
    this.size = function () {
      return collection.length;
    };
  }
  
  let trial = new Queue();
  trial.enqueue(2);
  trial.enqueue(3);
  trial.enqueue(4);
  
  console.log("isEmpty", trial.isEmpty());
  console.log("Size", trial.size());
  console.log("Front", trial.front());