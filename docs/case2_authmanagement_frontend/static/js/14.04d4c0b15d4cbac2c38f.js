webpackJsonp([14],{300:function(e,t,r){function i(e){r(485)}var o=r(2)(r(419),r(489),i,"data-v-0a7e0fc7",null);e.exports=o.exports},419:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{roleId:null,resourceLoading:!1,resourceVisible:!1,formResourceSubmiting:!1,resourceData:[],checkedResourceIds:[],resourceActiveName:"0",resourceActiveIndex:0}},methods:{getRoleResource:function(e){var t=this;this.resourceVisible=!0,this.resourceLoading=!0,this.roleId=e,this.$api.system.role.getResource({data:{id:this.roleId}}).then(function(e){t.resourceData=e.data.data.list,t.checkedResourceIds=e.data.data.checked.map(function(e){return parseInt(e)}),t.resourceLoading=!1}).catch(function(e){t.resourceLoading=!1,console.log(e)})},commitResourceForm:function(){var e=this;this.formResourceSubmiting=!0,this.$api.system.role.savePrivilege({data:{roleId:this.roleId,resourceType:1,resourceIds:this.checkedResourceIds}}).then(function(t){e.formResourceSubmiting=!1,e.resourceVisible=!1,e.$notify({title:"成功",message:"保存成功",type:"success",duration:1500}),console.log(t)}).catch(function(t){e.formResourceSubmiting=!1,e.$notify({title:"错误",message:t,type:"error",duration:3e3}),console.log(t)})}}}},428:function(e,t,r){t=e.exports=r(298)(!0),t.push([e.i,".panel-menu-item[data-v-0a7e0fc7]{width:90%;max-height:60px;border-radius:5px;display:inline-block;margin:10px 10px 10px 0}.panel-menu-item-title[data-v-0a7e0fc7]{float:left;padding:5px;margin-right:10px;border-right:1px solid #20a0ff}.el-checkbox-group[data-v-0a7e0fc7]{display:inline;margin:5px}","",{version:3,sources:["E:/Workspace/web-workspace/SoftwareDevelopmentCase/src/views/system/roleOperate/ActionManage.vue"],names:[],mappings:"AACA,kCACI,UAAW,AACX,gBAAiB,AACjB,kBAAmB,AACnB,qBAAsB,AACtB,uBAA2B,CAC9B,AACD,wCACI,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,8BAAgC,CACnC,AACD,oCACI,eAAgB,AAChB,UAAY,CACf",file:"ActionManage.vue",sourcesContent:["\n.panel-menu-item[data-v-0a7e0fc7] {\r\n    width: 90%;\r\n    max-height: 60px;\r\n    border-radius: 5px;\r\n    display: inline-block;\r\n    margin: 10px 10px 10px 0px;\n}\n.panel-menu-item-title[data-v-0a7e0fc7] {\r\n    float: left;\r\n    padding: 5px;\r\n    margin-right: 10px;\r\n    border-right: 1px solid #20a0ff;\n}\n.el-checkbox-group[data-v-0a7e0fc7] {\r\n    display: inline;\r\n    margin: 5px;\n}\r\n"],sourceRoot:""}])},485:function(e,t,r){var i=r(428);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);r(299)("66365fc8",i,!0)},489:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{directives:[{name:"loading",rawName:"v-loading.body",value:e.resourceLoading,expression:"resourceLoading",modifiers:{body:!0}}],attrs:{title:"角色资源管理",visible:e.resourceVisible,"element-loading-text":"玩命加载中"},on:{"update:visible":function(t){e.resourceVisible=t}}},[r("el-tabs",{model:{value:e.resourceActiveName,callback:function(t){e.resourceActiveName=t},expression:"resourceActiveName"}},e._l(e.resourceData,function(t,i){return r("el-tab-pane",{key:i,attrs:{label:t.title,name:String(i)}},e._l(t.children,function(t,i){return r("div",{key:i,staticClass:"panel-menu-item"},[r("span",{staticClass:"panel-menu-item-title"},[e._v(e._s(t.title))]),e._v(" "),r("el-checkbox-group",{model:{value:e.checkedResourceIds,callback:function(t){e.checkedResourceIds=t},expression:"checkedResourceIds"}},e._l(t.children,function(t){return r("el-checkbox",{key:t.id,attrs:{label:t.id}},[e._v(e._s(t.url))])}),1)],1)}),0)}),1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.resourceVisible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary",loading:e.formResourceSubmiting},on:{click:e.commitResourceForm}},[e._v("确 定")])],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=14.04d4c0b15d4cbac2c38f.js.map