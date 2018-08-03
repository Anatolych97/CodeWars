function Node(data) {
    this.data = data;
    this.next = null;
}

function removeDuplicates(head) {
    if (!head) return null;
    let currentNode = head,
        nextNode;
    while (currentNode.next !== null) {
        if (currentNode.data === currentNode.next.data) {
            nextNode = currentNode.next.next;
            currentNode.next = null;
            currentNode.next = nextNode;
        } else
            currentNode = currentNode.next;
    }
    return head;
}