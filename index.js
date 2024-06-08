//import "./styles.css";

let colorVal='var(--main-bg)';
let colorNav='var(--top-menu-bg)';
// Menu data structure
/*var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];*/
  var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];

let mainEle=document.getElementById("main_Div");
mainEle.style.textAlign='center';
mainEle.style.backgroundColor=colorVal;
mainEle.innerHTML= `<h1>DOM Manipulation</h1>`;
mainEle.classList.add("flex-ctr");
console.log(mainEle.outerHTML);
const topMenuEl=document.getElementById("top-menu");
//document.head.appendChild(navEle);

topMenuEl.style.height="100%";
//navEle.style.backgroundColor="blue";
topMenuEl.style.backgroundColor=colorNav;
topMenuEl.classList.add("flex-around");
let anchor;
let obj;
let subLinkArray=new Array();
for(let i=0;i<menuLinks.length;i++){
    //obj.add(menuLinks[i]);
    anchor= document.createElement("a");
    obj=new Object();
    obj=menuLinks[i];
    //console.log(obj);
   
    Object.entries(obj).forEach(([key, value]) => {
        if(key=='href')
        anchor.setAttribute(key,value);
        if(key=='text')
        anchor.textContent=value;
        if(key=='subLinks'){
        subLinkArray.push(value);
        }
        console.log(`${key} ${value}`); 
      });
   
      topMenuEl.appendChild(anchor);
   
}
console.log(subLinkArray);
let subMenuEl=document.getElementById("sub-menu");
let subMenuColor = 'var(--sub-menu-bg)';
subMenuEl.style.height="100%";
subMenuEl.style.backgroundColor=subMenuColor;
subMenuEl.classList.add("flex-around");
subMenuEl.style.position="absolute";
subMenuEl.style.top="0";
let topMenuLinks= document.querySelectorAll("#top-menu a");
//let allTopMenuLinks= document.querySelectorAll("#top-menu");
//let allTopMenuLinks=document.getElementsByClassName("top-menu-class");
console.log(topMenuLinks);
//console.log(allTopMenuLinks);
topMenuEl.addEventListener("click",(e)=>{
e.preventDefault();
if (e.target.nodeName != 'A') return;
//Logging the anchor elements
console.log(e.target);
if(e.target.classList=='active')
  {
    e.target.classList.remove('active');
    return;
  }
topMenuLinks.forEach((item) => {
  item.classList.remove('active');
});

e.target.classList.add('active');

});

//console.log(topMenuLinks[0]);
