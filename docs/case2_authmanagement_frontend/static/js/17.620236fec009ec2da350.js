webpackJsonp([17],{301:function(e,t,n){var i=n(2)(n(420),n(492),null,null,null);e.exports=i.exports},420:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{roleId:null,menuLoading:!1,menuVisible:!1,formMenuSubmiting:!1,menuData:[],expandedKeys:[],checkedKeys:[],defaultProps:{children:"children",label:"title"}}},methods:{getRoleMenu:function(e){var t=this;this.menuVisible=!0,this.menuLoading=!0,this.roleId=e,this.$api.system.role.getMenu({data:{id:this.roleId}}).then(function(e){t.checkedKeys=e.data.data.checkedKeys,t.expandedKeys=e.data.data.expandedKeys,t.menuData=e.data.data.list,t.menuLoading=!1}).catch(function(e){t.menuLoading=!1,console.log(e)})},commitMenuForm:function(){var e=this;this.formMenuSubmiting=!0,this.$api.system.role.savePrivilege({data:{roleId:this.roleId,resourceType:0,resourceIds:this.$refs.tree.getCheckedKeys()}}).then(function(t){e.formMenuSubmiting=!1,e.menuVisible=!1,e.$notify({title:"成功",message:"保存成功",type:"success",duration:1500}),console.log(t)}).catch(function(t){e.formMenuSubmiting=!1,e.$notify({title:"错误",message:t,type:"error",duration:3e3}),console.log(t)})}}}},492:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{directives:[{name:"loading",rawName:"v-loading.body",value:e.menuLoading,expression:"menuLoading",modifiers:{body:!0}}],attrs:{title:"角色菜单管理",visible:e.menuVisible,"element-loading-text":"玩命加载中"},on:{"update:visible":function(t){e.menuVisible=t}}},[n("el-tree",{ref:"tree",attrs:{data:e.menuData,"show-checkbox":"","node-key":"id","default-expanded-keys":e.expandedKeys,"default-checked-keys":e.checkedKeys,props:e.defaultProps}}),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.menuVisible=!1}}},[e._v("取 消")]),e._v(" "),n("el-button",{attrs:{type:"primary",loading:e.formMenuSubmiting},on:{click:e.commitMenuForm}},[e._v("确 定")])],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=17.620236fec009ec2da350.js.map