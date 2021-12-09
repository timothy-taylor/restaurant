const menu = () => {
    const dishes = [["House salad", "8.99"],
                    ["Caesar salad", "10.99"],
                    ["Soup of the day", "6.99"],
                    ["Garlic bread", "7.99"],
                    ["Arancini", "8.99"],
                    ["Mozzarella sticks", "8.99"],
                    ["Cheese pizza", "14.99"],
                    ["Pepperoni pizza", "16.99"],
                    ["Veggie pizza", "18.99"],
                    ["Meatlovers' pizza", "20.99"],
                    ["White pie with broccoli", "17.99"]];

    const element = document.createElement('P');

    const table = document.createElement('TABLE');

    const firstRow = document.createElement('TR');
    const header = document.createElement('TH');
    header.innerHTML = "Menu";
    firstRow.appendChild(header);
    table.appendChild(firstRow);

    dishes.forEach( dish => {
        const row = document.createElement('TR');
        const item = document.createElement('TD');
        const price = document.createElement('TD');
        item.innerHTML = dish[0];
        price.innerHTML = dish[1];
        row.appendChild(item);
        row.appendChild(price);
        table.appendChild(row);
    });

    element.appendChild(table);
    return element;
}

export default menu;
