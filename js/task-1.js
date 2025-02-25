const categories = document.querySelector('#categories');
const items = categories.querySelectorAll('.item');

console.log(`Number of categories: ${items.length}`);
console.log(items);

items.forEach((item) => {
    const header = item.querySelector('h2').textContent
    const itemElements = item.querySelectorAll('li').length
    console.log(`Category: ${header}`)
    console.log(`Elements: ${itemElements}`)
});
