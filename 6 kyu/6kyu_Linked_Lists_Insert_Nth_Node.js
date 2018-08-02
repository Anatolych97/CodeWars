function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  if (head) {
    let length = 1;
    while (head.next) {
      head = head.next;
      length++;
    }
    return length;
  }
  return 0;
}

function insertNth(head, index, data) {
  if (index < 0) throw new Exception();
  if (index > length(head)) throw new Exception();
  if (!head) {
    head = index === 0 ? new Node(data) : new Node(null);
    return head;
  }

  let node = new Node(data),
    curNode = head,
    count = 0;
  if (index === 0) {
    node.next = head;
    return node;
  }

  while (true) {
    if (count + 1 === index) {
      node.next = curNode.next;
      curNode.next = node;
      return head;
    }
    if (!curNode.next) {
      curNode.next = node;
      return head;
    }
    curNode = curNode.next;
    count++;
  }
}