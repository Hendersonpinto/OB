(this["webpackJsonporgani-basics"]=this["webpackJsonporgani-basics"]||[]).push([[0],{19:function(e,t,i){e.exports=i.p+"static/media/logo.ce99fde8.svg"},42:function(e,t,i){e.exports=i.p+"static/media/bag.2f75e767.svg"},44:function(e,t,i){e.exports=i.p+"static/media/herovideo.bb41e843.mp4"},47:function(e,t,i){e.exports=i(67)},58:function(e,t,i){},59:function(e,t,i){},60:function(e,t,i){},63:function(e,t,i){},64:function(e,t,i){},65:function(e,t,i){},66:function(e,t,i){},67:function(e,t,i){"use strict";i.r(t);var a=i(0),c=i.n(a),o=i(7),l=i.n(o),n=i(17),r=i(8),s=(i(57),i(58),i(59),i(24)),d=i(25),_=i(33),p=i(31),m=i(39),u=i(45),g=function(){return{type:"SHOW_MODAL"}},f=i(19),b=i.n(f),v=i(42),y=i.n(v),h=(i(60),Object(r.b)((function(e){var t=e.cart;return{addedItems:t.addedItems.length>0?t.addedItems.reduce((function(e,t){return e+t.quantity}),0):0}}))((function(e){var t=e.addedItems;return c.a.createElement("span",null,"Bag ",t>0?"(".concat(t,")"):"")}))),k=function(e){Object(_.a)(i,e);var t=Object(p.a)(i);function i(){return Object(s.a)(this,i),t.apply(this,arguments)}return Object(d.a)(i,[{key:"render",value:function(){var e=this;return c.a.createElement(m.a,{fixed:"top"},c.a.createElement(m.a.Brand,{href:"#home"},c.a.createElement("img",{alt:"",src:b.a,width:"200px",className:"d-inline-block align-top logoNavbar"})),c.a.createElement(u.a.Link,{href:"#features",onClick:function(){return e.props.showModal()}},c.a.createElement(h,null),c.a.createElement("img",{src:y.a,width:"30px",className:"d-inline-block align-top bagNavbar"})))}}]),i}(c.a.Component),E=Object(r.b)(null,{showModal:g})(k),O=i(30),w=i(44),j=i.n(w),N=(i(63),function(){return c.a.createElement("div",{className:"hero"},c.a.createElement("video",{autoPlay:!0,muted:!0,loop:!0,className:"hero__video"},c.a.createElement("source",{src:j.a,type:"video/mp4"})),c.a.createElement("div",{className:" hero__content"},c.a.createElement("h1",null,"Being naked is the #1 most sustainable option. We are #2"),c.a.createElement(O.a,{className:"hero__button",variant:"secondary",size:"lg"},"Check out our collection")))}),C=(i(64),function(e){return c.a.createElement("div",{className:"filters"},c.a.createElement("p",{className:" filters__title"},"Filter by:"),c.a.createElement("div",{className:"filter--color"},c.a.createElement("p",null,"Color:"),c.a.createElement("ul",{className:"filter--color__list"},function(e){var t=e.colors,i=e.filterProducts;return t.map((function(e){return c.a.createElement("li",{"data-filtervalue":e,"data-filterattr":"color",onClick:function(e){return i(e.target)}},c.a.createElement("div",{className:"color-label ".concat(e)}),c.a.createElement("p",{style:{width:"50%"}},e))}))}(e))),c.a.createElement("div",{className:"filter--size"},c.a.createElement("p",null,"Size:"),c.a.createElement("ul",{className:"filter--size__list"},function(e){var t=e.sizes,i=e.filterProducts;return t.map((function(e){return c.a.createElement("li",{"data-filtervalue":e,"data-filterattr":"size",onClick:function(e){return i(e.target)}},e)}))}(e))))}),T=(i(65),function(e){Object(_.a)(i,e);var t=Object(p.a)(i);function i(){return Object(s.a)(this,i),t.apply(this,arguments)}return Object(d.a)(i,[{key:"checkAvailability",value:function(e){return"out of stock"===e.availability?c.a.createElement("p",{className:"notice sold-out"},"SOLD OUT"):c.a.createElement("p",{className:"notice price"},e.price)}},{key:"renderProducts",value:function(){var e=this;return this.props.products.map((function(t){var i="out of stock"===t.availability?"sold-out":"";return c.a.createElement("div",{className:"product__card ".concat(i),onClick:function(i){e.props.addToCart(t)},key:t.id},c.a.createElement("div",{className:"product__image ".concat(i)},c.a.createElement("img",{src:t.image_link}),c.a.createElement("div",{className:"product__label"},c.a.createElement("img",{alt:"",src:b.a,width:"150px"}),c.a.createElement("h2",null,"Add to cart"),c.a.createElement("p",null,t.price," \u20ac")),e.checkAvailability(t)),c.a.createElement("div",{className:"product__description"},c.a.createElement("h3",null,t.title),c.a.createElement("div",{className:"product__details"},c.a.createElement("p",null,t.size),c.a.createElement("p",null,t.color))))}))}},{key:"render",value:function(){return c.a.createElement("section",{className:"products"},c.a.createElement("div",{className:"productsList"},this.renderProducts()))}}]),i}(c.a.Component)),z=Object(r.b)((function(e){return{products:e.cart.filteredItems}}),{addToCart:function(e){return{type:"ADD_TO_CART",payload:e}}})(T),R=i(22),U=(i(66),function(e){return e.length>0?e.map((function(e){return c.a.createElement("div",{className:"product__card",key:e.id},c.a.createElement("div",{className:"product__image"},c.a.createElement("img",{src:e.image_link}),function(e){return e.quantity>1?c.a.createElement("p",{className:"product__quantity"},e.quantity):""}(e)),c.a.createElement("div",{className:"product__description"},c.a.createElement("p",null,e.title),c.a.createElement("div",{className:"product__details"},c.a.createElement("p",null,"Size: ",e.size),c.a.createElement("p",null,"Color: ",e.color))))})):c.a.createElement("p",null,"You don't have anything in your bag")}),B=function(e){return c.a.createElement(R.a,Object.assign({className:"modal"},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),c.a.createElement(R.a.Header,{closeButton:!0},c.a.createElement(R.a.Title,{id:"contained-modal-title-vcenter"},c.a.createElement("img",{src:b.a,width:"150px",className:"d-inline-block"}))),c.a.createElement(R.a.Body,null,c.a.createElement("h4",null,"Your Bag"),c.a.createElement("div",{className:"item__list"},U(e.addeditems)),c.a.createElement("h3",null,"Total: ",e.totalprice," EUR")),c.a.createElement(R.a.Footer,null,c.a.createElement(O.a,{variant:"secondary",size:"lg",block:!0,onClick:e.onHide},e.addeditems.length>0?"Go to check out":"Go back to store")))};var L=Object(r.b)((function(e){var t=e.modal,i=e.cart;return{modalState:t.show,addedItems:i.addedItems,totalPrice:i.totalPrice,colors:i.colors,sizes:i.sizes}}),{showModal:g,filterProducts:function(e){return console.log("My filter element is"),console.dir(e),console.log(e.dataset.filtervalue),console.log(e.dataset.filterattr),{type:"FILTER_PRODUCTS",payload:{filterBy:e.dataset.filterattr,filterValue:e.dataset.filtervalue}}}})((function(e){return c.a.createElement("div",null,c.a.createElement(E,null),c.a.createElement(N,null),c.a.createElement("section",{className:"collection__wrapper"},c.a.createElement("h1",{className:"collection__title"},"SUMMER COLLECTION"),c.a.createElement("div",{className:"collection"},c.a.createElement(C,{filterProducts:e.filterProducts,colors:e.colors,sizes:e.sizes}),c.a.createElement(z,null))),c.a.createElement(B,{show:e.modalState,onHide:e.showModal,totalprice:e.totalPrice,addeditems:e.addedItems}))})),S=i(46),X=i(18),I={stock:[{title:"Organic Cotton Triangle Bra",id:19847696023622,price:"40.00 EUR",availability:"in stock",image_link:"https://cdn.shopify.com/s/files/1/0076/7800/1222/products/w_oc_trianglebra_nude_web_1_a580eae0-be6f-488c-895b-9530c8964965.jpg?v=1585820383",color:"Rose Nude",size:"L"},{title:"Organic Cotton Triangle Bra",id:19847695958086,price:"40.00 EUR",availability:"in stock",image_link:"https://cdn.shopify.com/s/files/1/0076/7800/1222/products/w_oc_trianglebra_nude_web_1_a580eae0-be6f-488c-895b-9530c8964965.jpg?v=1585820383",color:"Rose Nude",size:"M"},{title:"Organic Cotton Triangle Bra",id:19847695892550,price:"40.00 EUR",availability:"out of stock",image_link:"https://cdn.shopify.com/s/files/1/0076/7800/1222/products/w_oc_trianglebra_nude_web_1_a580eae0-be6f-488c-895b-9530c8964965.jpg?v=1585820383",color:"Rose Nude",size:"S"},{title:"Organic Cotton Triangle Bra",id:19847695827014,price:"40.00 EUR",availability:"in stock",image_link:"https://cdn.shopify.com/s/files/1/0076/7800/1222/products/w_oc_trianglebra_nude_web_1_a580eae0-be6f-488c-895b-9530c8964965.jpg?v=1585820383",color:"Rose Nude",size:"XS"},{title:"Organic Cotton Triangle Bra",id:19847696056390,price:"40.00 EUR",availability:"in stock",image_link:"https://cdn.shopify.com/s/files/1/0076/7800/1222/products/w_oc_trianglebra_black_web_1.jpg?v=1585820383",color:"Black",size:"XL"},{title:"Organic Cotton Triangle Bra",id:19847695990854,price:"40.00 EUR",availability:"out of stock",image_link:"https://cdn.shopify.com/s/files/1/0076/7800/1222/products/w_oc_trianglebra_black_web_1.jpg?v=1585820383",color:"Black",size:"L"},{title:"Organic Cotton Triangle Bra",id:19847695925318,price:"40.00 EUR",availability:"in stock",image_link:"https://cdn.shopify.com/s/files/1/0076/7800/1222/products/w_oc_trianglebra_black_web_1.jpg?v=1585820383",color:"Black",size:"M"},{title:"Organic Cotton Triangle Bra",id:19847695859782,price:"40.00 EUR",availability:"in stock",image_link:"https://cdn.shopify.com/s/files/1/0076/7800/1222/products/w_oc_trianglebra_black_web_1.jpg?v=1585820383",color:"Black",size:"S"},{title:"Organic Cotton Triangle Bra",id:19847695794246,price:"40.00 EUR",availability:"out of stock",image_link:"https://cdn.shopify.com/s/files/1/0076/7800/1222/products/w_oc_trianglebra_black_web_1.jpg?v=1585820383",color:"Black",size:"XS"},{title:"Organic Cotton Triangle Bra",id:19847696089158,price:"40.00 EUR",availability:"in stock",image_link:"https://cdn.shopify.com/s/files/1/0076/7800/1222/products/w_oc_trianglebra_nude_web_1_a580eae0-be6f-488c-895b-9530c8964965.jpg?v=1585820383",color:"Rose Nude",size:"XL"},{title:"Organic Cotton Tee",id:19847700316230,price:"33.00 EUR",availability:"in stock",image_link:"https://cdn.shopify.com/s/files/1/0076/7800/1222/products/m_oc_tee_black_web_5.jpg?v=1574888373",color:"Black",size:"XL"},{title:"Organic Cotton Tee",id:19847700414534,price:"33.00 EUR",availability:"in stock",image_link:"https://cdn.shopify.com/s/files/1/0076/7800/1222/products/m_oc_tee_navy_web_2.jpg?v=1574888390",color:"Navy",size:"XL"},{title:"Organic Cotton Tee",id:19847699890246,price:"33.00 EUR",availability:"in stock",image_link:"https://cdn.shopify.com/s/files/1/0076/7800/1222/products/m_oc_tee_black_web_5.jpg?v=1574888373",color:"Black",size:"S"},{title:"Organic Cotton Tee",id:19847700021318,price:"33.00 EUR",availability:"in stock",image_link:"https://cdn.shopify.com/s/files/1/0076/7800/1222/products/m_oc_tee_black_web_5.jpg?v=1574888373",color:"Black",size:"M"},{title:"Organic Cotton Tee",id:19847700185158,price:"33.00 EUR",availability:"in stock",image_link:"https://cdn.shopify.com/s/files/1/0076/7800/1222/products/m_oc_tee_black_web_5.jpg?v=1574888373",color:"Black",size:"L"},{title:"Organic Cotton Tee",id:19847700676678,price:"33.00 EUR",availability:"in stock",image_link:"https://cdn.shopify.com/s/files/1/0076/7800/1222/products/m_oc_tee_navy_web_2.jpg?v=1574888390",color:"Navy",size:"XXL"},{title:"Organic Cotton Tee",id:19847700447302,price:"33.00 EUR",availability:"in stock",image_link:"https://cdn.shopify.com/s/files/1/0076/7800/1222/products/m_oc_tee_black_web_5.jpg?v=1574888373",color:"Black",size:"XXL"},{title:"Organic Cotton Tee",id:19847699923014,price:"33.00 EUR",availability:"in stock",image_link:"https://cdn.shopify.com/s/files/1/0076/7800/1222/products/m_oc_tee_white_web_3.jpg?v=1574888390",color:"White",size:"S"},{title:"Organic Cotton Tee",id:19847700086854,price:"33.00 EUR",availability:"in stock",image_link:"https://cdn.shopify.com/s/files/1/0076/7800/1222/products/m_oc_tee_white_web_3.jpg?v=1574888390",color:"White",size:"M"},{title:"Organic Cotton Tee",id:19847700217926,price:"33.00 EUR",availability:"in stock",image_link:"https://cdn.shopify.com/s/files/1/0076/7800/1222/products/m_oc_tee_white_web_3.jpg?v=1574888390",color:"White",size:"L"},{title:"Organic Cotton Tee",id:19847700348998,price:"33.00 EUR",availability:"in stock",image_link:"https://cdn.shopify.com/s/files/1/0076/7800/1222/products/m_oc_tee_white_web_3.jpg?v=1574888390",color:"White",size:"XL"},{title:"Organic Cotton Tee",id:19847700512838,price:"33.00 EUR",availability:"out of stock",image_link:"https://cdn.shopify.com/s/files/1/0076/7800/1222/products/m_oc_tee_white_web_3.jpg?v=1574888390",color:"White",size:"XXL"},{title:"Organic Cotton Tee",id:19847699955782,price:"33.00 EUR",availability:"in stock",image_link:"https://cdn.shopify.com/s/files/1/0076/7800/1222/products/organic_basics_mens_organic_cotton_tee_grey_web_3.jpg?v=1574888390",color:"Grey",size:"S"},{title:"Organic Cotton Tee",id:19847700119622,price:"33.00 EUR",availability:"in stock",image_link:"https://cdn.shopify.com/s/files/1/0076/7800/1222/products/organic_basics_mens_organic_cotton_tee_grey_web_3.jpg?v=1574888390",color:"Grey",size:"M"},{title:"Organic Cotton Tee",id:19847700250694,price:"33.00 EUR",availability:"in stock",image_link:"https://cdn.shopify.com/s/files/1/0076/7800/1222/products/organic_basics_mens_organic_cotton_tee_grey_web_3.jpg?v=1574888390",color:"Grey",size:"L"},{title:"Organic Cotton Tee",id:19847700381766,price:"33.00 EUR",availability:"in stock",image_link:"https://cdn.shopify.com/s/files/1/0076/7800/1222/products/organic_basics_mens_organic_cotton_tee_grey_web_3.jpg?v=1574888390",color:"Grey",size:"XL"},{title:"Organic Cotton Tee",id:19847700611142,price:"33.00 EUR",availability:"in stock",image_link:"https://cdn.shopify.com/s/files/1/0076/7800/1222/products/organic_basics_mens_organic_cotton_tee_grey_web_3.jpg?v=1574888390",color:"Grey",size:"XXL"},{title:"Organic Cotton Tee",id:19847699988550,price:"33.00 EUR",availability:"out of stock",image_link:"https://cdn.shopify.com/s/files/1/0076/7800/1222/products/m_oc_tee_navy_web_2.jpg?v=1574888390",color:"Navy",size:"S"},{title:"Organic Cotton Tee",id:19847700152390,price:"33.00 EUR",availability:"in stock",image_link:"https://cdn.shopify.com/s/files/1/0076/7800/1222/products/m_oc_tee_navy_web_2.jpg?v=1574888390",color:"Navy",size:"M"},{title:"Organic Cotton Tee",id:19847700283462,price:"33.00 EUR",availability:"in stock",image_link:"https://cdn.shopify.com/s/files/1/0076/7800/1222/products/m_oc_tee_navy_web_2.jpg?v=1574888390",color:"Navy",size:"L"}],addedItems:[],totalPrice:0,filteredItems:[],colors:["Black","Navy","Rose Nude","Grey","White"],sizes:["XS","S","M","L","XL","XXL"]},P={show:!1},M=Object(n.b)({cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_CART":if("out of stock"!==t.payload.availability){var i=e.stock.find((function(e){return e.id===t.payload.id})),a=e.addedItems.find((function(e){return t.payload.id===e.id}));return a?(i.quantity+=1,Object(X.a)({},e,{totalPrice:e.totalPrice+parseFloat(i.price.match("-?[0-9]+[.]*[0-9]*"))})):(i.quantity=1,Object(X.a)({},e,{addedItems:[].concat(Object(S.a)(e.addedItems),[i]),totalPrice:e.totalPrice+parseFloat(i.price.match("-?[0-9]+[.]*[0-9]*"))}))}case"FILTER_PRODUCTS":var c=e.stock.filter((function(e){return console.log("My actual item is"),e[t.payload.filterBy]===t.payload.filterValue}));return Object(X.a)({},e,{filteredItems:c});default:return Object(X.a)({},e,{filteredItems:e.stock})}},modal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;return"SHOW_MODAL"===t.type?Object(X.a)({},e,{show:!e.show}):e}}),D=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||n.c;setTimeout((function(){l.a.render(c.a.createElement(r.a,{store:Object(n.d)(M,D())},c.a.createElement(L,null)),document.getElementById("root"))}),2800)}},[[47,1,2]]]);
//# sourceMappingURL=main.13682e11.chunk.js.map