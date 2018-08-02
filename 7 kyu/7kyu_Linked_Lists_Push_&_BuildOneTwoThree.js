function Node(data) {
    this.data = data;
    this.next = null;
  }

  function push(head, data) {
    let newNode = new Node(data);
    newNode.next = head;
    return newNode;
  }

  function buildOneTwoThree() {
    let list = null;
    list = push(list, 3);
    list = push(list, 2);
    list = push(list, 1);
    return list;
  }