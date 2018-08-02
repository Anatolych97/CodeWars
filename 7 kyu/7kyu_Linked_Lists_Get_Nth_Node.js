function Node(data) {
    this.data = data;
    this.next = null;
  }
  function length(head) {
    if(head) {
      let length = 1;
      while(head.next) {
        head = head.next;
        length++;
      }
      return length;
    }
    return 0;
  }
  function getNth(node, index) {
    if(!node) throw new Exception();
    if(index < 0 || index >= length(node)) throw new Exception();

    let item, count = 0;
    while(node && count <= index) {
      count++;
      item = node;
      node = node.next;
    }

    return item;
  }
