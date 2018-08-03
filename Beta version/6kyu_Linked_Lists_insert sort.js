function Node(data) {
    this.data = data;
    this.next = null;
}

function insertSort(head) {
    if (!head) return null;
    if (!head.next) return head;
    // Initialize sorted linked list
    let sorted = null,
        current = head;
    // Traverse the given linked list and insert every
    // node to sorted
    while (current) {
        // Store next for next iteration
        let next = current.next;
        // insert current in sorted linked list
        sortedInsert(current);
        // Update current
        current = next;
    }
    head = sorted;
}

function insertSort(head) {

}