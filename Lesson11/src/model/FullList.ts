import ListItem from './ListItem';

interface List {
    list: ListItem[],
    load(): void,
    save(): void,
    clearList(): void,
    addItem(itemObj: ListItem): void,
    removeItem(id: string): void
}

export default class FullList implements List {
    static instance: FullList = new FullList();
    private constructor(
        private _list: ListItem[] = []
    ){}
    get list(): ListItem[] {
        return this._list;
    }
    load(): void {
        const storedList: string | null = localStorage.getItem("myList");
        if(typeof storedList !== "string"){
            return;
        }else{
            const parsedList: {_id: string, _item: string, _checked: boolean}[] = JSON.parse(storedList);
            parsedList.forEach(itemObj => {
                const newListItem = new ListItem(itemObj._id, itemObj._item, itemObj._checked);
                FullList.instance.addItem(newListItem);
            });
            return;
        }
    }
    save(): void{
        localStorage.setItem("myList", JSON.stringify(this._list));
        return;
    }
    clearList(): void {
        this._list = [];
        this.save();
        return;
    }
    addItem(itemObj: ListItem): void {
        this._list.push(itemObj);
        this.save();
        return;
    }
    removeItem(id: string): void {
        this._list = this._list.filter(item => item.id !== id);
        this.save();
        return;
    }
}