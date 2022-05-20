import{_ as l,r as c,o as i,a as r,b as n,d as a,w as e,F as u,c as k,e as s}from"./app.b2353902.js";const d={},m=k('<h1 id="command-permissions" tabindex="-1"><a class="header-anchor" href="#command-permissions" aria-hidden="true">#</a> Command permissions</h1><p>With sheweny you can defined permissions of bot and user.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>You can use <code>BOT_ADMIN</code> permissions for check if user is admin of bot.</p></div><p>If user missing permissions the command <code>userMissingPermissions</code> :</p><p>Parameters :</p>',5),g=s("interaction or message (if bot use slash-commands or not) (type : "),_={href:"https://discord.js.org/#/docs/main/stable/class/Interaction",target:"_blank",rel:"noopener noreferrer"},b=s("Interaction"),h=s(" or "),v={href:"https://discord.js.org/#/docs/main/stable/class/Message",target:"_blank",rel:"noopener noreferrer"},y=s("Message"),f=s(")"),w=s("missing (type : Array<"),M={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"},S=s("String"),C=s(">)"),x=n("p",null,[s("If bot missing permissions the command "),n("code",null,"botMissingPermissions"),s(" :")],-1),P=n("p",null,"Parameters :",-1),A=s("interaction or message (if bot use slash-commands or not) (type : "),I={href:"https://discord.js.org/#/docs/main/stable/class/Interaction",target:"_blank",rel:"noopener noreferrer"},E=s("Interaction"),N=s(" or "),B={href:"https://discord.js.org/#/docs/main/stable/class/Message",target:"_blank",rel:"noopener noreferrer"},j=s("Message"),O=s(")"),D=s("missing (type : Array<"),T={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"},G=s("String"),J=s(">)"),R=n("h2",{id:"slash-command",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#slash-command","aria-hidden":"true"},"#"),s(" Slash-command")],-1),L=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" Command "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"sheweny"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

module`),n("span",{class:"token punctuation"},"."),s("exports "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"PingCommand"),s(),n("span",{class:"token keyword"},"extends"),s(),n("span",{class:"token class-name"},"Command"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"constructor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"client"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"super"),n("span",{class:"token punctuation"},"("),s("client"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"ping"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"description"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Ping the bot"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"SLASH_COMMAND"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"category"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Misc"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"userPermissions"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"BAN_MEMBERS"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"BOT_ADMIN"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token function"},"execute"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"interaction"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    interaction`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Pong !"'),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),V=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Command "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"sheweny"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token punctuation"},"{"),s(" ShewenyClient "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"sheweny"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token punctuation"},"{"),s(" CommandInteraction "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"discord.js"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"PingCommand"),s(),n("span",{class:"token keyword"},"extends"),s(),n("span",{class:"token class-name"},"Command"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"constructor"),n("span",{class:"token punctuation"},"("),s("client"),n("span",{class:"token operator"},":"),s(" ShewenyClient"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"super"),n("span",{class:"token punctuation"},"("),s("client"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"ping"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
      description`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Ping the bot"'),n("span",{class:"token punctuation"},","),s(`
      type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"SLASH_COMMAND"'),n("span",{class:"token punctuation"},","),s(`
      category`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Misc"'),n("span",{class:"token punctuation"},","),s(`
      userPermissions`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"BAN_MEMBERS"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"BOT_ADMIN"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token function"},"execute"),n("span",{class:"token punctuation"},"("),s("interaction"),n("span",{class:"token operator"},":"),s(" CommandInteraction"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    interaction`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(" content"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Pong !"'),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),W=n("h2",{id:"message-command",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#message-command","aria-hidden":"true"},"#"),s(" Message command")],-1),q=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" Command "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"sheweny"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

module`),n("span",{class:"token punctuation"},"."),s("exports "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"PingCommand"),s(),n("span",{class:"token keyword"},"extends"),s(),n("span",{class:"token class-name"},"Command"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"constructor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"client"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"super"),n("span",{class:"token punctuation"},"("),s("client"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"ping"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"description"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Ping the bot"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"MESSAGE_COMMAND"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"category"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Misc"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"userPermissions"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"BAN_MEMBERS"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"BOT_ADMIN"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token function"},"execute"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"message"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    message`),n("span",{class:"token punctuation"},"."),s("channel"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"send"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Pong !"'),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),z=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Command "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"sheweny"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token punctuation"},"{"),s(" ShewenyClient "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"sheweny"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token punctuation"},"{"),s(" Message "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"discord.js"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"PingCommand"),s(),n("span",{class:"token keyword"},"extends"),s(),n("span",{class:"token class-name"},"Command"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"constructor"),n("span",{class:"token punctuation"},"("),s("client"),n("span",{class:"token operator"},":"),s(" ShewenyClient"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"super"),n("span",{class:"token punctuation"},"("),s("client"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"ping"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
      description`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Ping the bot"'),n("span",{class:"token punctuation"},","),s(`
      type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"MESSAGE_COMMAND"'),n("span",{class:"token punctuation"},","),s(`
      category`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Misc"'),n("span",{class:"token punctuation"},","),s(`
      userPermissions`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"BAN_MEMBERS"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"BOT_ADMIN"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token function"},"execute"),n("span",{class:"token punctuation"},"("),s("message"),n("span",{class:"token operator"},":"),s(" Message"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    message`),n("span",{class:"token punctuation"},"."),s("channel"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"send"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(" content"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Pong !"'),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function F(H,U){const t=c("ExternalLinkIcon"),o=c("CodeGroupItem"),p=c("CodeGroup");return i(),r(u,null,[m,n("ul",null,[n("li",null,[g,n("a",_,[b,a(t)]),h,n("a",v,[y,a(t)]),f]),n("li",null,[w,n("a",M,[S,a(t)]),C])]),x,P,n("ul",null,[n("li",null,[A,n("a",I,[E,a(t)]),N,n("a",B,[j,a(t)]),O]),n("li",null,[D,n("a",T,[G,a(t)]),J])]),R,a(p,null,{default:e(()=>[a(o,{title:"JS CommonJS"},{default:e(()=>[L]),_:1}),a(o,{title:"TS ES Modules"},{default:e(()=>[V]),_:1})]),_:1}),W,a(p,null,{default:e(()=>[a(o,{title:"JS CommonJS"},{default:e(()=>[q]),_:1}),a(o,{title:"TS ES Modules"},{default:e(()=>[z]),_:1})]),_:1})],64)}var K=l(d,[["render",F],["__file","Permissions.html.vue"]]);export{K as default};
