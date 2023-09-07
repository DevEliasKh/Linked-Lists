class Node {
	constructor(value) {
		this.value = value || null;
		this.nextNode = null;
	}
}

class LinkedList {
	constructor() {
		this.listHead = null;
	}

	append(value) {
		if (this.listHead == null) {
			this.prepend(value);
		} else {
			let tmp = this.listHead;
			while (tmp != null) {
				tmp = tmp.nextNode;
			}
			tmp.nextNode = new Node(value);
		}
	}

	prepend(value) {
		let tmp = null;
		if (this.listHead != null) tmp = this.listHead;
		this.listHead = new Node(value);
		this.listHead.nextNode = tmp;
	}

	size() {
		let count = 0;
		let tmp = this.listHead;
		while (tmp.nextNode != null) {
			count++;
			tmp = tmp.nextNode;
		}
		return count;
	}
	head() {
		return this.listHead;
	}

	tail() {
		let tmp = this.listHead;
		let tail = null;
		if (tmp == null) {
			return tail;
		} else {
			while (tmp != null) {
				tail = tmp;
				tmp = tmp.nextNode;
			}
			return tail;
		}
	}

	at(index) {
		let tmp = this.listHead;
		for (let i = 0; i < index; i++) {
			tmp = tmp.nextNode;
		}
		return tmp;
	}
	pop() {
		let tmp = this.listHead;
		while (tmp.nextNode != null) {
			tmp = tmp.nextNode;
		}
		temp.value = null;
	}

	contains(value) {
		let tmp = this.listHead;
		while (tmp != null) {
			if (tmp.value == value) {
				return true;
			}
			tmp = tmp.nextNode;
		}
		return false;
	}

	find(value) {
		let tmp = this.listHead;
		let index = 0;
		while (tmp != null) {
			if (tmp.value == value) {
				return index;
			}
			index++;
			tmp = tmp.nextNode;
		}
		return null;
	}

	toString() {
		let tmp = this.listHead;
		let listString = '';
		while (tmp != null) {
			listString += `${tmp.value} ->`;
		}
		return (listString += null);
	}
}

const linkedList = new LinkedList();

linkedList.prepend('test1');
linkedList.append('test2');
linkedList.append('test3');
console.log(linkedList.toString());
console.log(linkedList.size());
console.log(linkedList.head());
console.log(linkedList.tail());
console.log(linkedList.at(2));
console.log(linkedList.at(4));
linkedList.pop();
console.log(linkedList.toString());
console.log(linkedList.contains('test1'));
console.log(linkedList.find('test2'));
console.log(linkedList.toString());
