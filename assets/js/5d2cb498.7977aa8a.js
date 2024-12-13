"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[356],{8489:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"Integration/model","title":"\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438","description":"\u0412\u044b\u0431\u043e\u0440 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438","source":"@site/docs/Integration/model.md","sourceDirName":"Integration","slug":"/Integration/model","permalink":"/Purr-Stay/docs/Integration/model","draft":false,"unlisted":false,"editUrl":"https://github.com/chernoova/Purr-Stay/docs/Integration/model.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f \u0441 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c","permalink":"/Purr-Stay/docs/category/\u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f-\u0441-\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c"},"next":{"title":"\u0422\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f \u043a \u0441\u0438\u0441\u0442\u0435\u043c\u0435","permalink":"/Purr-Stay/docs/category/\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f-\u043a-\u0441\u0438\u0441\u0442\u0435\u043c\u0435"}}');var t=r(4848),i=r(8453);const a={title:"\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438",sidebar_position:1},c=void 0,o={},d=[{value:"\u0412\u044b\u0431\u043e\u0440 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438",id:"\u0432\u044b\u0431\u043e\u0440-\u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438",level:3},{value:"\u041a\u0430\u043a \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442?",id:"\u043a\u0430\u043a-\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442",level:3},{value:"\u0424\u043e\u0440\u043c\u0430\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f",id:"\u0444\u043e\u0440\u043c\u0430\u0442-\u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0438-\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f",level:3},{value:"Sequence diagram",id:"sequence-diagram",level:3},{value:"AsyncAPI",id:"asyncapi",level:2}];function l(e){const n={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"\u0432\u044b\u0431\u043e\u0440-\u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438",children:"\u0412\u044b\u0431\u043e\u0440 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438"}),"\n",(0,t.jsx)(n.p,{children:'\u0412 \u043c\u043e\u0435\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 (\u043a\u0430\u043a \u043e\u043f\u0435\u043a\u0443\u043d\u044b, \u0442\u0430\u043a \u0438 \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u044b) \u043c\u043e\u0433\u0443\u0442 \u043e\u0431\u0449\u0430\u0442\u044c\u0441\u044f \u0432 \u0447\u0430\u0442\u0435, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0441\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u043c \u043f\u043e\u0441\u043b\u0435 \u043d\u0430\u0436\u0430\u0442\u0438\u044f \u043a\u043d\u043e\u043f\u043a\u0438 "\u0411\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0435\u0440\u0435\u0434\u0435\u0440\u0436\u043a\u0443/\u043e\u043f\u0435\u043a\u0443\u043d\u0430". \u0412 \u044d\u0442\u043e\u043c \u0447\u0430\u0442\u0435 \u043e\u043d\u0438 \u043e\u0431\u0441\u0443\u0436\u0434\u0430\u044e\u0442 \u0434\u0435\u0442\u0430\u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0435\u0440\u0436\u043a\u0438, \u0442\u0430\u043a\u0438\u0435 \u043a\u0430\u043a \u0446\u0435\u043d\u0430, \u043c\u0435\u0441\u0442\u043e \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f.'}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u0414\u043b\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0447\u0430\u0442\u0430 \u044f \u0432\u044b\u0431\u0440\u0430\u043b\u0430 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u044e WebSocket"}),", \u0442\u0430\u043a \u043a\u0430\u043a \u043e\u043d\u0430 \u0438\u0434\u0435\u0430\u043b\u044c\u043d\u043e \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442 \u0434\u043b\u044f \u0442\u0430\u043a\u0438\u0445 \u0437\u0430\u0434\u0430\u0447. WebSocket \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e\u0435 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u043c\u0435\u0436\u0434\u0443 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u043c \u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c, \u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f \u0447\u0435\u043c\u0443 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0438 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u044e\u0442\u0441\u044f \u0432 \u0440\u0435\u0436\u0438\u043c\u0435 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0431\u0435\u0437 \u0437\u0430\u0434\u0435\u0440\u0436\u0435\u043a. \u042d\u0442\u043e \u0433\u043e\u0440\u0430\u0437\u0434\u043e \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u0435\u0435 \u043f\u043e \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044e \u0441 HTTP, \u0433\u0434\u0435 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u043f\u0440\u0438\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u043e\u0442\u043a\u0440\u044b\u0432\u0430\u0442\u044c \u0438 \u0437\u0430\u043a\u0440\u044b\u0432\u0430\u0442\u044c \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0437\u0430\u043d\u043e\u0432\u043e. \u0412 WebSocket \u0421\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u043e\u0442\u043a\u0440\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u0438\u043d \u0440\u0430\u0437 \u0438 \u043e\u0441\u0442\u0430\u0451\u0442\u0441\u044f \u0430\u043a\u0442\u0438\u0432\u043d\u044b\u043c \u0434\u043e \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f \u0447\u0430\u0442\u0430. \u0412 \u043c\u043e\u0435\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u044f \u0431\u0443\u0434\u0443 \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 JSON."]}),"\n",(0,t.jsx)(n.h3,{id:"\u043a\u0430\u043a-\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442",children:"\u041a\u0430\u043a \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442?"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u041a\u043e\u0433\u0434\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043e\u0442\u043a\u0440\u044b\u0432\u0430\u0435\u0442 \u0447\u0430\u0442, \u043e\u043d \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u0442\u0441\u044f \u043a WebSocket-\u0441\u0435\u0440\u0432\u0435\u0440\u0443 \u043f\u043e \u0430\u0434\u0440\u0435\u0441\u0443:\r\n",(0,t.jsx)(n.code,{children:"wss://chat.purrandstay.com/chat/{chatId}"})]}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"chatId"})," \u2014 \u044d\u0442\u043e \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u0447\u0430\u0442\u0430."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043c\u043e\u0436\u0435\u0442:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u041f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u043d\u043e\u0432\u044b\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u043e\u0442 \u0434\u0440\u0443\u0433\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, \u0441 \u043a\u0435\u043c \u0432\u044b \u043e\u0431\u0449\u0430\u0435\u0442\u0435\u0441\u044c, \u0447\u0435\u0440\u0435\u0437 \u0441\u0435\u0440\u0432\u0435\u0440"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"\u0444\u043e\u0440\u043c\u0430\u0442-\u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0438-\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f",children:"\u0424\u043e\u0440\u043c\u0430\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "sessionId": "1234567890abcdef123",\r\n  "message": "\u0412\u044b \u0437\u0430\u0431\u0435\u0440\u0435\u0442\u0435 \u043c\u043e\u044e \u043a\u043e\u0448\u043a\u0443 \u043d\u0430 2 \u0434\u043d\u044f?",\r\n  "timestamp": "2024-11-18T14:25:00Z"\r\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"sequence-diagram",children:"Sequence diagram"}),"\n",(0,t.jsx)(n.img,{src:"https://www.plantuml.com/plantuml/png/jPF1IiD054Nt0_c7HrOLT66MNMYthhF8Uam35hKjwRXlaaKHGWKHt2d-GHeI6fjc_8Nx_aYIg0iX644t0pFlSizzRsOCCLeewQkRwoj3I5VDVC8pD4gEiOL6YeH3vFN--2U1POYvzDN4dSpbL97fUEVspBtq5E45EI-Hrgj9Sa6ERGX3T9Bew8GSUzYICknGyffNA3Zac0E-eu5x8TNP-C0GZbsBEvs6DLiZHuO25N9KA90JHnnmY0HLeo-RWkvEPFrP8kkNYVfCwOb3lF4I2T8s4N403OqDttu11YOUaRMg1fLoXDVQx92GGcFBCVR8wnF27fhNhSq62Q-mu-ZKxDNT0_H7A_-Vfi-DzPtE_IUL8xFNm-hRw3VZaJSTDz_j7G00"}),"\n",(0,t.jsx)(n.h2,{id:"asyncapi",children:"AsyncAPI"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"asyncapi: '2.6.0'\r\ninfo:\r\n  title: API \u041b\u0438\u0447\u043d\u043e\u0433\u043e \u0427\u0430\u0442\u0430\r\n  version: '1.0.0'\r\n  description: |\r\n    \u042d\u0442\u043e API \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439 \u0438 \u043c\u0435\u0434\u0438\u0430\u0444\u0430\u0439\u043b\u043e\u0432 \u043c\u0435\u0436\u0434\u0443 \u0434\u0432\u0443\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c\u0438 \u0432 \u0440\u0435\u0436\u0438\u043c\u0435 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0447\u0435\u0440\u0435\u0437 WebSocket.\r\n    \u041a\u0430\u0436\u0434\u044b\u0439 \u0447\u0430\u0442 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u0446\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u043c `chatId`. \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u0446\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 `sessionId`\r\n\r\nservers:\r\n  chatServer:\r\n    url: wss://chat.purrandstay.com\r\n    protocol: wss\r\n    description: \u0421\u0435\u0440\u0432\u0435\u0440 WebSocket \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u043b\u0438\u0447\u043d\u044b\u043c \u0447\u0430\u0442\u043e\u043c\r\n\r\ndefaultContentType: application/json\r\n\r\nchannels:\r\n  /chat/{chatId}:\r\n    parameters:\r\n      chatId:\r\n        description: \u0423\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0447\u0430\u0442\u0430 \u043c\u0435\u0436\u0434\u0443 \u0434\u0432\u0443\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c\u0438\r\n        schema:\r\n          type: string\r\n          example: \"abc123\"\r\n    description: \u041a\u0430\u043d\u0430\u043b WebSocket \u0434\u043b\u044f \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439 \u0432 \u0447\u0430\u0442\u0435\r\n    subscribe:\r\n      summary: \u041f\u043e\u0434\u043f\u0438\u0441\u043a\u0430 \u043d\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439 \u0432 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u043c \u0447\u0430\u0442\u0435\r\n      operationId: receiveMessage\r\n      message:\r\n        $ref: '#/components/messages/ChatMessage'\r\n    publish:\r\n      summary: \u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0432 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0439 \u0447\u0430\u0442\r\n      operationId: sendMessage\r\n      message:\r\n        $ref: '#/components/messages/ChatMessage'\r\n\r\ncomponents:\r\n  messages:\r\n    ChatMessage:\r\n      description: \u041b\u0438\u0447\u043d\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435, \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u043e\u0435 \u0438\u043b\u0438 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c\u043e\u0435 \u0432 \u0447\u0430\u0442\u0435\r\n      payload:\r\n        $ref: '#/components/schemas/ChatMessageSchema'\r\n\r\n  schemas:\r\n    ChatMessageSchema:\r\n      type: object\r\n      properties:\r\n        sessionId:\r\n          type: string\r\n          description: \u0423\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0441\u0435\u0441\u0441\u0438\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0434\u043b\u044f \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438\r\n          example: \"session_1234567890abcdef\"\r\n        message:\r\n          type: string\r\n          description: \u0422\u0435\u043a\u0441\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f\r\n          example: \"\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435, \u0432\u043e\u0437\u044c\u043c\u0435\u0442\u0435 \u043c\u043e\u044e \u0441\u043e\u0431\u0430\u0447\u043a\u0443?\"\r\n        timestamp:\r\n          type: string\r\n          format: date-time\r\n          description: \u0412\u0440\u0435\u043c\u044f \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f.\r\n          example: \"2024-11-18T12:34:56Z\"\r\n\r\n    ErrorSchema:\r\n      description: \u0414\u0435\u0442\u0430\u043b\u0438 \u043e\u0448\u0438\u0431\u043a\u0438 \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439\r\n      type: object\r\n      properties:\r\n        code:\r\n          type: integer\r\n          description: \u041a\u043e\u0434 \u043e\u0448\u0438\u0431\u043a\u0438, \u0430\u043d\u0430\u043b\u043e\u0433 HTTP-\u043a\u043e\u0434\u0430\r\n          example: 400\r\n        message:\r\n          type: string\r\n          description: \u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043e\u0431 \u043e\u0448\u0438\u0431\u043a\u0435.\r\n          example: \"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f\"\r\n\r\ntags:\r\n  - name: \u041b\u0438\u0447\u043d\u044b\u0439 \u0447\u0430\u0442\r\n    description: \u041e\u043f\u0435\u0440\u0430\u0446\u0438\u0438, \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0435 \u0441 \u043b\u0438\u0447\u043d\u044b\u043c \u0447\u0430\u0442\u043e\u043c\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>c});var s=r(6540);const t={},i=s.createContext(t);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);