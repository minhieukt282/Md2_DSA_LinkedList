export interface IArrayList<T> {
    add(data: T): void;
    get(index: number): T;
    size(): number;
    remove(): void;
}
class ArrayList<T> implements IArrayList<T>{
    list: Array<T> =[]
    add(data: T) {
        this.list.push(data)
    }
    get(index: number): T {
        return this.list[index]
    }
    size(): number {
        return this.list.length
    }
    remove() {
        this.list.pop()
    }
    showList(): Array<T>{
        return this.list;
    }
}
let array = new ArrayList()
array.add(123)
array.add("mkaaa")
array.add("@@@@")
console.log(array.showList())