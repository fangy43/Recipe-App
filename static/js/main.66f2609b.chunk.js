(this["webpackJsonprecipe-app"]=this["webpackJsonprecipe-app"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),i=c.n(a),r=c(6),s=c.n(r),o=(c(13),c(4)),p=c.n(o),u=c(7),j=c(2),l=c(5),b=c.n(l),d=function(e){var t=e.title,c=e.calories,a=e.image,i=e.ingredients;return Object(n.jsxs)("div",{className:b.a.recipe,children:[Object(n.jsx)("h1",{children:t}),Object(n.jsx)("ol",{children:i.map((function(e){return Object(n.jsx)("li",{children:e.text})}))}),Object(n.jsxs)("p",{children:["Calories : ",c.toFixed(2)]}),Object(n.jsx)("img",{className:b.a.image,src:a,alt:""})]})};c(15);var h=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),c=t[0],i=t[1],r=Object(a.useState)(""),s=Object(j.a)(r,2),o=s[0],l=s[1],b=Object(a.useState)("chicken"),h=Object(j.a)(b,2),m=h[0],f=h[1];Object(a.useEffect)((function(){O()}),[m]);var O=function(){var e=Object(u.a)(p.a.mark((function e(){var t,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(m,"&app_id=").concat("9a8eea3a","&app_key=").concat("05427799cd94578ca031950698ea31b3\t"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,i(c.hits);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("div",{className:"logo",children:"Recipe App"}),Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),f(o),l("")},className:"search-form",children:[Object(n.jsx)("input",{className:"search-bar",type:"text",value:o,onChange:function(e){return function(e){l(e.target.value)}(e)}}),Object(n.jsx)("button",{className:"search-btn",type:"submit",children:"Search"})]}),Object(n.jsx)("div",{className:"recipes",children:c.map((function(e){return Object(n.jsx)(d,{title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients},e.recipe.lable)}))})]})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),i(e),r(e)}))};s.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(h,{})}),document.getElementById("root")),m()},5:function(e,t,c){e.exports={recipe:"Recipe_recipe__3eeRW",image:"Recipe_image__jnmud"}}},[[16,1,2]]]);
//# sourceMappingURL=main.66f2609b.chunk.js.map