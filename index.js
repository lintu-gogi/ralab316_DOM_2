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
menuLinks.forEach(element => {
  console.log(element);
});

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
    subMenuEl.style.top="0"
    return;
  }

  //Any other active link will get removed
topMenuLinks.forEach((item) => {
  item.classList.remove('active');
  subMenuEl.style.top="0%"
});
if(e.target.classList!="active"){
  console.log("inactive, make active");
  e.target.classList.add('active');
  //subMenuEl.style.top="100%"
  // Check if item has sublinks
    menuLinks.forEach(item => {
    if(item.text==e.target.textContent)
      {
        console.log(item.text + e.target.textContent);
        console.log(item.text);
        //console.log(" Sublinks= "+item.subLinks);
        if(item.subLinks)
          {
            subMenuEl.style.top="100%"
            buildSubmenu(item.subLinks);

            console.log(" Sublinks= "+item.subLinks);

          }
      }
  });
}
});

  //console.log(e.target.menuLinks.subLinks.length);
  //console.log(e.target.subLinks);

    // Check if item has sublinks
    //topMenuLinks.forEach(item => {
    
  //});

   /* if (e.target.subLinks) {
     // const submenu = createMenu(item.subLinks);
      subMenuEl.style.top="100%"
      console.log(e.target.subLinks);
      //console.log(e.target.subLinks.length);
      //menuItem.appendChild(submenu);
    }*/

    //menu.appendChild(menuItem);

//e.target.classList.add('active');
//subMenuEl.style.top="100%"
function buildSubmenu(sLinks){
  
//subMenuEl.classList.toggle("hidden");
//subMenuEl.classList.remove('active');
let anchor;
let obj;
for(let i=0;i<sLinks.length;i++){
    //obj.add(menuLinks[i]);
    anchor= document.createElement("a");
    obj=new Object();
    obj=sLinks[i];
    //console.log(obj);
   
    Object.entries(obj).forEach(([key, value]) => {
        if(key=='href')
        anchor.setAttribute(key,value);
        if(key=='text')
        anchor.textContent=value;
       
      });
   
      subMenuEl.appendChild(anchor);
   
}

}

//console.log(topMenuLinks[0]);
