(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(e,a,t){e.exports={profile:"Profile_profile__1QIPp",description:"Profile_description__18jm7",avatar:"Profile_avatar__S3lZG",name:"Profile_name__lWrfp",tag:"Profile_tag__1HlMe",location:"Profile_location__3ce23",stats:"Profile_stats__3q3KB",statsItem:"Profile_statsItem__KgT4-",label:"Profile_label__36wUD",quantity:"Profile_quantity__9zVXi"}},function(e,a,t){e.exports={statistics:"Statistics_statistics__2GnOa",statsTitle:"Statistics_statsTitle__3qHG-",statList:"Statistics_statList__l6fO-",statsItem:"Statistics_statsItem__26TYg",label:"Statistics_label__3GOfS",percentage:"Statistics_percentage__N75IE"}},,,function(e,a,t){e.exports={tableContainer:"TransactionHistory_tableContainer___aKAx",tableTitle:"TransactionHistory_tableTitle__2mTrI",tableBody:"TransactionHistory_tableBody__1NMQ0"}},,,,,,,,function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".jpg","percentage":10}]')},function(e){e.exports=JSON.parse('[{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/shojberg/128.jpg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/j04ntoh/128.jpg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/mugukamil/128.jpg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/sweetdelisa/128.jpg","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"Invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"Payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"Invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"Withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"Withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"Payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"Withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"Withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"Payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"Withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"Invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"Payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"Withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"Invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"Invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"Invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"Invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"Payment","amount":"405.45","currency":"MDL"}]')},,,function(e,a,t){e.exports=t(29)},,,,,,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(10),s=t.n(c),i=t(1),l=t.n(i),o=function(e){var a=e.user;return r.a.createElement("div",{className:l.a.profile},r.a.createElement("div",{className:l.a.description},r.a.createElement("img",{src:a.avatar,alt:"avatar",className:l.a.avatar}),r.a.createElement("p",{className:l.a.name},a.name),r.a.createElement("p",{className:l.a.tag},"@".concat(a.tag)),r.a.createElement("p",{className:l.a.location},a.location)),r.a.createElement("ul",{className:l.a.stats},r.a.createElement("li",{className:l.a.statsItem},r.a.createElement("span",{className:l.a.label},"Followers"),r.a.createElement("span",{className:l.a.quantity},a.stats.followers)),r.a.createElement("li",{className:l.a.statsItem},r.a.createElement("span",{className:l.a.label},"Views"),r.a.createElement("span",{className:l.a.quantity},a.stats.views)),r.a.createElement("li",{className:l.a.statsItem},r.a.createElement("span",{className:l.a.label},"Likes"),r.a.createElement("span",{className:l.a.quantity},a.stats.likes))))},m=t(2),u=t.n(m);function d(){return"#".concat(Math.floor(16777216*Math.random()).toString(16))}var p=function(e){var a=e.title,t=e.stats;return r.a.createElement("section",{className:u.a.statistics},a&&r.a.createElement("h2",{className:u.a.statsTitle,style:{color:d()}},a),r.a.createElement("ul",{className:u.a.statList},t.length>0&&t.map((function(e){var a=e.id,t=e.label,n=e.percentage;return r.a.createElement("li",{key:a,className:u.a.statsItem,style:{backgroundColor:d()}},r.a.createElement("span",{className:u.a.label,style:{color:d()}},t),r.a.createElement("span",{className:u.a.percentage,style:{color:d()}},"".concat(n,"%")))}))))},f=t(3),b=t(4);function y(){var e=Object(f.a)(["\n  font-family: Tahoma, sans-serif;\n  font-size: 30px;\n"]);return y=function(){return e},e}function _(){var e=Object(f.a)(["\n  width: 100px;\n  height: 100px;\n  margin-right: 20px;\n  padding: 10px 0;\n  border-radius: 15%;\n"]);return _=function(){return e},e}function g(){var e=Object(f.a)(["\n  margin-right: 20px;\n  height: 25px;\n  width: 25px;\n  border-radius: 50%;\n  background-color: ",";\n"]);return g=function(){return e},e}function E(){var e=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n  padding-left: 20px;\n  box-shadow: 1px 1px 3px 1px rgba(191, 205, 222, 0.75);\n"]);return E=function(){return e},e}function h(){var e=Object(f.a)(["\n  margin: 0 auto;\n  list-style: none;\n  padding: 0;\n  width: 400px;\n  margin-bottom: 100px;\n"]);return h=function(){return e},e}var v=b.a.ul(h()),w=b.a.li(E()),N=b.a.span(g(),(function(e){return e.isOnline?"green":"red"})),x=b.a.img(_()),O=b.a.p(y()),P=function(e){var a=e.friends;return r.a.createElement(v,null,a.map((function(e){var a=e.id,t=e.isOnline,n=e.avatar,c=e.name;return r.a.createElement(w,{key:a},r.a.createElement(N,{isOnline:t}),r.a.createElement(x,{src:n,alt:"avatar"}),r.a.createElement(O,null,c))})))},I=t(5),j=t.n(I),T=function(e){var a=e.items;return r.a.createElement("table",{className:j.a.tableContainer},r.a.createElement("thead",{className:j.a.tableTitle},r.a.createElement("tr",null,r.a.createElement("th",null,"Type"),r.a.createElement("th",null,"Amount"),r.a.createElement("th",null,"Currency"))),r.a.createElement("tbody",{className:j.a.tableBody},a.length>0&&a.map((function(e){var a=e.id,t=e.type,n=e.amount,c=e.currency;return r.a.createElement("tr",{key:a},r.a.createElement("td",null,t),r.a.createElement("td",null,n),r.a.createElement("td",null,c))}))))},S=t(13),k=t(14),U=t(15),G=t(16),W=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o,{user:S}),r.a.createElement(p,{title:"Upload stats",stats:k}),r.a.createElement(P,{friends:U}),r.a.createElement(T,{items:G}))};s.a.render(r.a.createElement(W,null),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.d314d7ac.chunk.js.map