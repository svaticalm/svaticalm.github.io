(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["faq"],{"10c2":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content faq-page"},[t._m(0),n("section",{staticClass:"container"},[n("div",{staticClass:"faq-list"},t._l(t.items,(function(e){return n("div",{key:e.id,staticClass:"faq-item"},[n("div",{staticClass:"h2 text-color"},[t._v(t._s(e.name))]),n("p",{staticClass:"text-color",domProps:{innerHTML:t._s(t.replaceUrl(e.description))}})])})),0),n("div",{staticClass:"button-block mt32"},[n("button",{staticClass:"btn",on:{click:function(e){return t.openAskQuestion()}}},[t._v("Задать вопрос")])])]),n("popup-info-block",{attrs:{show:t.popups.newQuest.show,"is-set-blank":!1,"add-class":".newQuest",title:"","modal-type":"",text:"",btntext:"Степенно жду!",name:t.popups.newQuest.name}},[n("div",{staticClass:"modal-txt"},[n("svg",{staticClass:"icon"},[n("use",{attrs:{"xlink:href":s("973d")+"#emoji-new-quest"}})]),n("div",{staticClass:"modal-ttl"},[t._v("Ваш вопрос принят!")]),n("p",[t._v("Мы прочитаем его в любом случае"),n("br"),t._v("и опубликуем, если он окажется"),n("br"),t._v("интересным...")])])]),n("popup",{attrs:{show:t.popups.askQuestion.show,"is-set-blank":t.isBanned,title:"Задать вопрос Алексею Земскову",name:t.popups.askQuestion.name}},[n("div",[n("textarea-field",{staticClass:"full mt24",class:{error:t.quest_error},style:{resize:"none"},attrs:{"add-style":{height:"200px"},placeholder:"Например, «А бесплатные купоны – это вообще законно?!»"},on:{focus:function(e){t.quest_error=!1}},model:{value:t.questText,callback:function(e){t.questText=e},expression:"questText"}})],1),n("div",{staticClass:"row-b mt32 button-block"},[n("button",{staticClass:"btn",on:{click:function(e){return t.sendQuest()}}},[t._v("Отправить")])])])],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main-title"},[s("div",{staticClass:"page-ttl",staticStyle:{"justify-content":"center"}},[t._v("Вопросы и ответы")])])}],o=(s("8e6e"),s("ac6a"),s("456d"),s("bd86")),i=(s("a481"),s("7f7f"),s("8472")),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"popup-info"},[s("div"),t._m(0),s("div",{staticClass:"mt32"},[s("button",{staticClass:"btn btn--white-green",on:{click:function(e){return t.newQuestModalClose()}}},[t._v("Степенно жду!")])])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text mt32"},[s("div",{staticClass:"text-size-xxl text-color-green text-bolder"},[t._v("Ваш вопрос принят!")]),s("p",{staticClass:"mt24"},[t._v("Мы прочитаем его в любом случае и опубликуем, если он окажется интересным...")])])}],u=s("516f"),p=s("2f62");function l(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function f(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?l(Object(s),!0).forEach((function(e){Object(o["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):l(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var d={name:"newQuest",methods:{newQuestModalClose:function(){this.$store.commit("popups/close",{name:this.popups.newQuest.name})}},computed:f({},Object(p["b"])({popups:function(t){return t.popups.items}}))},m=d,b=s("2877"),v=Object(b["a"])(m,c,a,!1,null,"1b5550cc",null),h=v.exports,O=s("7f09");function w(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function _(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?w(Object(s),!0).forEach((function(e){Object(o["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):w(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var j={metaInfo:function(){return{title:"Вопросы и ответы",titleTemplate:this.$store.state.options.titleTemplate}},name:"Faq",components:{PopupInfoBlock:i["a"],NewQuest:h,TextareaField:O["a"],Popup:u["a"]},data:function(){return{questText:"",quest_error:!1,send_quest_success:!0}},created:function(){this.$store.dispatch("faq/getList")},mounted:function(){ym(39511350,"hit",this.$route.path,{title:"Вопросы и ответы | ZemSkidki.ru"})},methods:{sendQuest:function(){var t=this;t.quest_error=!1,""===t.questText?setTimeout((function(){t.quest_error=!0}),300):(t.quest_error=!1,this.$store.dispatch("faq/sendQuest",{quest:t.questText}).then((function(){t.questText=""})),t.newQuestModalOpen())},newQuestModalOpen:function(){this.send_quest_success=!1,this.$store.commit("popups/open",{name:this.popups.newQuest.name})},openAskQuestion:function(){this.$store.commit("popups/open",{name:this.popups.askQuestion.name})},replaceUrl:function(t){return t.replace("zemskidki.ru","m.zemskidki.ru")}},computed:_({},Object(p["b"])({popups:function(t){return t.popups.items}}),{items:function(){return this.send_quest_success=!0,this.$store.getters["faq/getList"]()}})},y=j,k=Object(b["a"])(y,n,r,!1,null,null,null);e["default"]=k.exports}}]);
//# sourceMappingURL=faq.3b233da5.js.map