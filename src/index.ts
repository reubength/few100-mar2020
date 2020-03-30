
import './styles.css';

const items: ShoppingItem[] = [
    { description: 'Toilet Paper' },
    { description: 'Shampoo' },
    { description: 'Beer' }
];

const theList = document.getElementById('the-list') as HTMLUListElement;
const theButton = document.getElementById('addButton') as HTMLButtonElement;
const itemToAdd = document.getElementById('itemToAdd') as HTMLInputElement;
theButton.addEventListener('click', addTheItem);

drawList();

function addTheItem() {
    const newItem: ShoppingItem = {
        description: itemToAdd.value
    };
    items.unshift(newItem);
    drawList();
}

function drawList() {
    // <li class="alert alert-info"><span>Shampoo</span></li>
    items.forEach(item => {
        const newElem = document.createElement('li');
        newElem.classList.add('alert');
        newElem.classList.add('alert-info');
        const newSpan = document.createElement('span');
        newSpan.innerText = item.description;
        newElem.appendChild(newSpan);
        theList.appendChild(newElem);

    });
}

interface ShoppingItem {
    description: string;
}

