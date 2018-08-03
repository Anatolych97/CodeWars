function Node(data) {
  this.data = data;
  this.next = null;
}

function sortedInsert(head, data) {
  if (!head) return new Node(data);
  let curNode = head,
    node = new Node(data),
    count = 0;

  while (curNode) {
    if (!curNode.next) {
      curNode.next = node;
      return head;
    }
    if (curNode.data > node.data && count === 0) {
      node.next = curNode;
      listDisp(node);
      return node;
    } else if (curNode.next.data > node.data) {
      node.next = curNode.next;
      curNode.next = node;
      listDisp(head);
      return head;
    }
    count++;
    curNode = curNode.next;
  }
}


//Recursive
function Node(data, nxt) {
  this.data = data;
  this.next = nxt;
}

function sortedInsert(head, data) {
  if (!head || data < head.data) return new Node(data, head);
  else {
    head.next = sortedInsert(head.next, data);
    return head;
  }
}