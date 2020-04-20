let books = document.querySelectorAll('.books'),
    book = document.querySelectorAll('.book');
books[0].insertBefore(book[0], book[2]);
books[0].insertBefore(book[3], book[5]);
books[0].appendChild(book[2]);

let body = document.querySelector('body');
body.setAttribute('style', 'background-image: url(./image/you-dont-know-js.jpg);');

let newTitle = document.querySelectorAll('.books h2 a');
newTitle.forEach(function(item){
    if(item.textContent === 'Книга 3. this и Пропопипы Объектов')
        item.textContent = 'Книга 3. this и Прототипы Объектов';
});
let adv = document.querySelectorAll('.adv');
body.removeChild(adv[0]);

let parent = document.querySelectorAll('.book ul');
console.log('parent: ', parent);
let child = document.querySelectorAll('.book ul li');
console.log('child: ', child);

parent[4].insertBefore(child[45], child[38]);
parent[4].insertBefore(child[38], child[41]);
parent[4].insertBefore(child[41], child[44]);
parent[1].insertBefore(child[12], child[10]);
parent[1].insertBefore(child[14], child[10]);
parent[1].insertBefore(child[8], child[16]);

let newChildOne = document.createElement('li');
newChildOne.textContent = 'Глава 8: За пределами ES6';
console.log('newChildOne: ', newChildOne);

child[55].append(newChildOne);

// parent[5].insertBefore(child[55], newChildOne); //Выдает ошибку. и я хз как сделать. СЖЕЧЬ ЭТУ ЕРЕСЬ! 