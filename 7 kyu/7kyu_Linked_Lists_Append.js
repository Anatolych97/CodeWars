function Node(data) {
  this.data = data;
  this.next = null;
}

function append(listA, listB) {
  if (!listA && !listB) return null;
  if (!listA) return listB;
  else if (!listB) return listA;

  let head = listA;
  while (listA) {
    if (!listA.next) {
      listA.next = listB;
      return head;
    }
    listA = listA.next;
  }
}

//Recursive
function append(a, b) {
  if (!a) return b;
  a.next = append(a.next, b);
  return a;
}