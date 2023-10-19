import FullList from './../model/FullList';

interface DOMList {
    ul: HTMLUListElement,
    clear(): void,
    render(fullList: FullList): void
}

export default class ListTemplate implements DOMList {
    ul: HTMLUListElement;
    static instance: ListTemplate = new ListTemplate();
    private constructor() {
        this.ul = document.getElementById('listItems') as HTMLUListElement;
    }
    clear(): void {
        this.ul.innerHTML = '';
        return;
    }
    render(fullList: FullList): void {
        this.clear();
        fullList.list.forEach(item => {
            const li = document.createElement('li') as HTMLElement;
            const check = document.createElement('input') as HTMLInputElement;
            const label = document.createElement('label') as HTMLLabelElement;
            const button = document.createElement('button') as HTMLButtonElement;
            li.className = 'item';
            check.type = 'checkbox',
            check.id = item.id;
            check.tabIndex = 0;
            check.checked = item.checked;
            li.append(check);
            label.htmlFor = item.id;
            label.textContent = item.item;
            li.append(label);
            button.className = 'button';
            button.textContent = 'X';
            li.append(button);
            check.addEventListener('change', () => {
                item.checked = !item.checked;
                fullList.save();
            });
            button.addEventListener('click', () => {
                fullList.removeItem(item.id);
                //fullList.save();
                this.render(fullList);
            });
            this.ul.append(li);
        });
    }
}