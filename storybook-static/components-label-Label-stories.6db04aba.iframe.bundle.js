"use strict";(self.webpackChunkmy_component_library=self.webpackChunkmy_component_library||[]).push([[156],{"./src/components/label/Label.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,WithBackgroundColor:()=>WithBackgroundColor,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Label_stories}),__webpack_require__("./node_modules/react/index.js");var _templateObject,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");let StyledLabel=styled_components_browser_esm.cp.label(_templateObject||(_templateObject=(0,taggedTemplateLiteral.c)(["\n  font-size: 16px;\n  font-weight: bold;\n  background-color: ",";\n  cursor: ",";\n  color: ",";\n"])),props=>props.backgroundColor||"transparent",props=>props.disabled?"not-allowed":"pointer",props=>props.disabled?"gray":"black"),Label=_ref=>{let{text,backgroundColor,disabled}=_ref;return(0,jsx_runtime.jsx)(StyledLabel,{backgroundColor:backgroundColor,disabled:disabled,children:text})};try{Label.displayName="Label",Label.__docgenInfo={description:"",displayName:"Label",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/label/Label.tsx#Label"]={docgenInfo:Label.__docgenInfo,name:"Label",path:"src/components/label/Label.tsx#Label"})}catch(__react_docgen_typescript_loader_error){}let Label_stories={title:"Label",component:Label},Template=args=>(0,jsx_runtime.jsx)(Label,{...args}),Default=Template.bind({});Default.args={text:"Label Text"};let WithBackgroundColor=Template.bind({});WithBackgroundColor.args={text:"Label with Background",backgroundColor:"lightblue"};let Disabled=Template.bind({});Disabled.args={text:"Disabled Label",disabled:!0},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Label {...args} />",...Default.parameters?.docs?.source}}},WithBackgroundColor.parameters={...WithBackgroundColor.parameters,docs:{...WithBackgroundColor.parameters?.docs,source:{originalSource:"args => <Label {...args} />",...WithBackgroundColor.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"args => <Label {...args} />",...Disabled.parameters?.docs?.source}}};let __namedExportsOrder=["Default","WithBackgroundColor","Disabled"]}}]);