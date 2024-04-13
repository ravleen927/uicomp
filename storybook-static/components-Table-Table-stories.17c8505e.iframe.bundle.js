"use strict";(self.webpackChunkmy_component_library=self.webpackChunkmy_component_library||[]).push([[248],{"./src/components/Table/Table.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Table_stories});var _templateObject,_templateObject2,react=__webpack_require__("./node_modules/react/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");let StyledTable=styled_components_browser_esm.cp.table(_templateObject||(_templateObject=(0,taggedTemplateLiteral.c)(["\n  width: 100%;\n  border-collapse: collapse;\n"]))),StyledTableBody=styled_components_browser_esm.cp.tbody(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.c)(["\n  td {\n    padding: 8px;\n    background-color: ",";\n    cursor: ",";\n  }\n"])),props=>props.disabled?"#f2f2f2":props.backgroundColor||"transparent",props=>props.disabled?"not-allowed":"pointer"),Table=_ref=>{let{defaultText,children,...rest}=_ref;return(0,jsx_runtime.jsxs)(StyledTable,{...rest,children:[react.Children.map(children,child=>react.isValidElement(child)&&"tbody"===child.type?(0,jsx_runtime.jsx)(StyledTableBody,{...rest,children:child.props.children}):child),defaultText&&(0,jsx_runtime.jsx)("caption",{children:defaultText})," "]})};try{Table.displayName="Table",Table.__docgenInfo={description:"",displayName:"Table",props:{defaultText:{defaultValue:null,description:"",name:"defaultText",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Table/Table.tsx#Table"]={docgenInfo:Table.__docgenInfo,name:"Table",path:"src/components/Table/Table.tsx#Table"})}catch(__react_docgen_typescript_loader_error){}let Table_stories={title:"Table",component:Table,argTypes:{backgroundColor:{control:"color"},disabled:{control:"boolean"},cell1Text:{control:"text"},cell2Text:{control:"text"},cell3Text:{control:"text"},cell4Text:{control:"text"}}},Template=_ref=>{let{cell1Text,cell2Text,cell3Text,cell4Text,...args}=_ref;return(0,jsx_runtime.jsx)(Table,{...args,children:(0,jsx_runtime.jsxs)("tbody",{children:[(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("th",{children:"Header 1"}),(0,jsx_runtime.jsx)("th",{children:"Header 2"})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:cell1Text||"Cell 1"}),(0,jsx_runtime.jsx)("td",{children:cell2Text||"Cell 2"})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:cell3Text||"Cell 3"}),(0,jsx_runtime.jsx)("td",{children:cell4Text||"Cell 4"})]})]})})},Default=Template.bind({});Default.args={cell1Text:"Cell 1",cell2Text:"Cell 2",cell3Text:"Cell 3",cell4Text:"Cell 4",backgroundColor:"#ffffff",disabled:!1};let Disabled=Template.bind({});Disabled.args={cell1Text:"Cell 1",cell2Text:"Cell 2",cell3Text:"Cell 3",cell4Text:"Cell 4",backgroundColor:"#ffffff",disabled:!0},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  cell1Text,\n  cell2Text,\n  cell3Text,\n  cell4Text,\n  ...args\n}) => <Table {...args}>\r\n    <tbody>\r\n      <tr>\r\n        <th>Header 1</th>\r\n        <th>Header 2</th>\r\n      </tr>\r\n      <tr>\r\n        <td>{cell1Text || 'Cell 1'}</td>\r\n        <td>{cell2Text || 'Cell 2'}</td>\r\n      </tr>\r\n      <tr>\r\n        <td>{cell3Text || 'Cell 3'}</td>\r\n        <td>{cell4Text || 'Cell 4'}</td>\r\n      </tr>\r\n    </tbody>\r\n  </Table>",...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"({\n  cell1Text,\n  cell2Text,\n  cell3Text,\n  cell4Text,\n  ...args\n}) => <Table {...args}>\r\n    <tbody>\r\n      <tr>\r\n        <th>Header 1</th>\r\n        <th>Header 2</th>\r\n      </tr>\r\n      <tr>\r\n        <td>{cell1Text || 'Cell 1'}</td>\r\n        <td>{cell2Text || 'Cell 2'}</td>\r\n      </tr>\r\n      <tr>\r\n        <td>{cell3Text || 'Cell 3'}</td>\r\n        <td>{cell4Text || 'Cell 4'}</td>\r\n      </tr>\r\n    </tbody>\r\n  </Table>",...Disabled.parameters?.docs?.source}}};let __namedExportsOrder=["Default","Disabled"]}}]);