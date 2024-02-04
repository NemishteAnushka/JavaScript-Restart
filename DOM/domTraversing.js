const rootNode = document.getRootNode(); //method to check root node
console.log(rootNode)

const rootNodeChild = document.getRootNode();
console.log(rootNodeChild.childNodes) //method to get childnodes
console.log(rootNodeChild.childNodes[0])

const htmlChildNodes = rootNodeChild.childNodes[0]; // to get childs of html
const htmlChilds = htmlChildNodes.childNodes
console.log(htmlChilds)

const htmlHeadElement = htmlChilds[0];
console.log(htmlHeadElement);

const htmlTextElement = htmlChilds[1];
console.log(htmlTextElement);

const htmlBodyElement = htmlChilds[2];
console.log(htmlBodyElement)

//parent of head

console.log(htmlHeadElement.parentNode)

//sibling relation

console.log(htmlHeadElement.nextSibling) //text and body

//Method to avoid textNodes

console.log(htmlHeadElement.nextElementSibling) //this will give element node and ignore text

//child of headElement

const headChilds = htmlHeadElement.childNodes
console.log(headChilds)


//task

const h1 = document.querySelector("h1");
const h1Parent = h1.parentElement;
console.log(h1Parent);
h1Parent.style.backgroundColor="red";
h1Parent.style.color="white"

const body = h1Parent.parentElement;
console.log(body);
body.style.backgroundColor = "yellow";


//direct select body

const directBody = document.body
console.log(directBody);

const directHead = document.head;
console.log(directHead)

const title = directHead.querySelector("title");
console.log(title)


//childern

const div = document.querySelector("div");
console.log(div)

console.log(div.children)

