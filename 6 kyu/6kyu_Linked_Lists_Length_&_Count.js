function Node(data) {
  this.data = data;
  this.next = null;
}
function SinglyList() {
  this._length = 0;
  this.head = null;
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

function count(head, data) {
  let count = 0;
  while(head) {
    if(head.data === data) count++;
    head = head.next;
  };
  return count;
}