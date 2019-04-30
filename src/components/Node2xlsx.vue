<template>
    <div class="all_windows">
        <Layout style="width:100%;height:100%;">
            <LayoutPanel region="north" style="height:50px;">
                <div class="title">在Vue开发环境下，使用xlsx对表格进行读操作</div>
            </LayoutPanel>
            <LayoutPanel region="south" style="height:50px;">
                    <div class="title">Copyright © 2019 Kaiyou Hu. All rights reserved.</div>
            </LayoutPanel>
            <LayoutPanel region="west" class="middle_height" style="width:160px;">
                <div style="border-width: 1px;border-color: #95B8E7;
                  border-bottom-style: solid;height: 160px;">
                    <div id="drop">Drop a file here(Not yet)</div>
                    <FileButton style="width:100px" @select="onFileSelect">Select a file</FileButton>
                    <p v-if="file_name">You selected: {{file_name}}</p>
                </div>
                <div>
                    <div style="border-width: 1px;border-color: #95B8E7;
                      border-bottom-style: solid;height: 32px;line-height: 32px;">
                        workbook
                    </div>
                    <template v-if="workbook !== null">
                        <div v-for="(SheetName, index) in workbook.SheetNames"
                             :key="SheetName" @click="chooseSheet(SheetName)"
                             style="border-width: 1px;border-color: #95B8E7;
                          border-bottom-style: solid;height: 32px;line-height: 32px;">
                            {{ index }}-{{ SheetName }}
                        </div>
                    </template>
                </div>
            </LayoutPanel>
            <LayoutPanel region="east" class="middle_height" style="width:120px;">
                <div class="title">(To be continued)</div>
            </LayoutPanel>
            <LayoutPanel region="center" class="middle_height">
                <canvas-datagrid :data.prop="sheet"></canvas-datagrid>
            </LayoutPanel>
        </Layout>
    </div>
</template>

<script>
  import XLSX from 'xlsx'
  require('canvas-datagrid')
  export default {
    name: 'Node2xlsx',
    // components:{
    //   canvasDatagrid
    // },
    props: {

    },
    data() {
      return {
        /**
         * @author Kaiyou Hu
         * @data 2019/04/28
         * @description 读取excel文件层次 file -> workbook -> sheet
         */
        file: null,
        file_name: '',

        workbook: null,

        Sheets: null,

        /**
         * @author Kaiyou Hu
         * @data 2019/04/30
         * @description Cell
         */
        sheet: null
      }
    },
    created() {

    },
    mounted() {

    },
    methods: {
      /**
       * @author Kaiyou Hu
       * @data 2019/04/28
       * @description 选择excel文件
       * @param $event
       * @return 文件
       */
      onFileSelect: function (event) {
        if (event.length > 1 || event.length < 0){
          this.$messager.alert({
            title: "数量错误",
            msg: "你可能一次添加了多个文件!"
          });
          return
        }
        var file = event[0]
        this.file = file
        const types = file.name.split('.')[1]
        const fileType = ['txt', 'xlsx', 'xlsb', 'xlc', 'xlm', 'xls', 'xlt', 'xlw', 'csv'].some(item => item === types)
        if (!fileType) {
          this.$messager.alert({
            title: "类型错误",
            msg: "你可能使用了一个错误的文件类型!"
          });
          return
        }
        this.file_name = file.name;

        // var wb;//读取完成的数据
        // var rABS = false; //是否将文件读取为二进制字符串

        this.readExcel(file)
      },

      /**
       * @author Kaiyou Hu
       * @data 2019/04/29
       * @description 读取excel文件
       * @param $file
       * @return workbook
       */
      readExcel: function (file) {
        //判断浏览器是否支持FileReader接口
        if(typeof FileReader === 'undefined'){
          this.$messager.alert({
            title: "系统错误",
            msg: "你的浏览器不支持FileReader接口！"
          })
        }
        const fileReader = new FileReader(file);
        fileReader.onload = (ev) => {
          try {
            const data = ev.target.result
            const workbook = XLSX.read(data, {
              type: 'binary'
            })
            this.workbook = workbook
          } catch (e) {
            this.$messager.alert({
              title: "错误",
              msg: "读取文件错误，调试信息：" + JSON.stringify(e)
            })
            return false
          }
        };
        fileReader.readAsBinaryString(file);
      },

      /**
       * @author Kaiyou Hu
       * @data 2019/04/30
       * @description 选择sheet
       * @param ShhetName
       * @return workbook.sheet
       */
      chooseSheet: function (SheetName) {
        this.sheet = XLSX.utils.sheet_to_json(this.workbook.Sheets[SheetName])
      }
    }
  }
</script>

<style scoped>
  .all_windows {
      width: 100%;
      height: 100%;
  }
  .title {
      text-align: center;
      margin-top: 10px;
  }
  .middle_height {
      height: 100%;
  }
  #drop{
      border:2px dashed #bbb;
      -moz-border-radius:5px;
      -webkit-border-radius:5px;
      border-radius:5px;
      padding:0px 0px -50px 0px;
      text-align:center;
      width:158px;
      font:16pt bold,"Vollkorn";color:#bbb
  }
</style>
