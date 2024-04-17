<template>
 <div id="app" v-cloak>
         <!-- 搜索栏 -->
         <div class="search_main">
             <div class="ibox-search" ref="menus">
                 <el-form :inline="true" class="form-inline">
                     <el-form-item label="排班日期">
                         <el-date-picker v-model="time" size="small" type="month" placeholder="选择日期"
                             value-format="yyyy-MM" clearable id="month1" class="ywidth">
                         </el-date-picker>
                     </el-form-item>
                     <el-form-item>
                         <el-button size="small" @click="search" type="primary">查询</el-button>
                     </el-form-item>
                 </el-form>
             </div>
         </div>
         <!-- 内容栏 -->
         <div class="layout-main">
             <div class="ibox-search">
                 <!-- 循环表头 -->
                 <el-table :data="tableData" border style="width: 100%" v-loading="loadings" :height="height" ref="table"
                     @cell-click='getCell' :cell-class-name='getRowColumn'>
                     <el-table-column v-for="(arrd,index) in headered" :fixed="arrd.fixed" :key="index"
                         :label="arrd.name" align="center" show-overflow-tooltip :prop="arrd.key"
                         :width="arrd.key=='ks'||arrd.key=='doctor'?'100px':''">
                         <template slot-scope='scope'>
                             <!-- 列不等于科室和医生的才有输入框 -->
                             <div v-if="arrd.key!=='ks'&&arrd.key!=='doctor'">
                                 <el-input v-model='scope.row[arrd.key]'
                                     v-if='scope.row.index == tabRowIndex  && scope.column.index == tabColumnIndex'
                                     @blur='inputBlur' size="mini" v-focus></el-input>
                                 <div v-else style="cursor: pointer;" @click="inputType(scope.row[arrd.key])">
                                     {{scope.row[arrd.key]}}</div>
                             </div>
                             <div v-else>
                                 {{scope.row[arrd.key]}}
                             </div>
                         </template>
                     </el-table-column>
                 </el-table>
                 <!-- 分页 -->
                 <div class="list-footer" ref="footer">
                     <div class="foot-bg">
                     </div>
                     <div class="block page_r">
                         <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                             :current-page="currentPage" :page-sizes="[10, 30, 50, 100]" :page-size="pagesize"
                             layout="total, sizes, prev, pager, next, jumper" :total="count">
                         </el-pagination>
                     </div>
                 </div>
             </div>
         </div>
     </div>
</template>
<script>

export default {
  directives: {
              //注册一个局部的自定义指令 v-focus，输入框自动聚焦
              focus: {
                  inserted: function (el) {
                      el.querySelector('input').focus()
                  }
              }
          },
data() {
            return {
                time: '', //日期
                tableData: [{
                    "ks": "中医科",
                    "doctor": "段占国",
                    "num1": 0,
                    "num2": 0,
                    "num3": 0,
                    "num4": 0,
                    "num5": 0,
                    "num6": 0,
                    "num7": 0,
                    "num8": 0,
                    "num9": 0,
                    "num10": 0,
                    "num11": 0,
                    "num12": 0,
                    "num13": 0,
                    "num14": 0,
                    "num15": 0,
                    "num16": 0,
                    "num17": 0,
                    "num18": 0,
                    "num19": 0,
                    "num20": 0,
                    "num21": 0,
                    "num22": 0,
                    "num23": 0,
                    "num24": 0,
                    "num25": 0,
                    "num26": 0,
                    "num27": 0,
                    "num28": 0,
                    "index": 0
                }, {
                    "ks": "中医科",
                    "doctor": "陈森",
                    "num1": 0,
                    "num2": 0,
                    "num3": 0,
                    "num4": 0,
                    "num5": 0,
                    "num6": 0,
                    "num7": 0,
                    "num8": 0,
                    "num9": 0,
                    "num10": 0,
                    "num11": 0,
                    "num12": 0,
                    "num13": 0,
                    "num14": 0,
                    "num15": 0,
                    "num16": 0,
                    "num17": 0,
                    "num18": 0,
                    "num19": 0,
                    "num20": 0,
                    "num21": 0,
                    "num22": 0,
                    "num23": 0,
                    "num24": 0,
                    "num25": 0,
                    "num26": 0,
                    "num27": 0,
                    "num28": 0,
                    "index": 1
                }], //表格数据
                headered: [{
                        "key": "ks",
                        "name": "科室"
                    },
                    {
                        "key": "doctor",
                        "name": "专家"
                    },
                    {
                        "key": "num1",
                        "name": "2023-02-01"
                    },
                    {
                        "key": "num2",
                        "name": "2023-02-02"
                    },
                    {
                        "key": "num3",
                        "name": "2023-02-03"
                    },
                    {
                        "key": "num4",
                        "name": "2023-02-04"
                    },
                    {
                        "key": "num5",
                        "name": "2023-02-05"
                    },
                    {
                        "key": "num6",
                        "name": "2023-02-06"
                    },
                    {
                        "key": "num7",
                        "name": "2023-02-07"
                    },
                    {
                        "key": "num8",
                        "name": "2023-02-08"
                    },
                    {
                        "key": "num9",
                        "name": "2023-02-09"
                    },
                    {
                        "key": "num10",
                        "name": "2023-02-10"
                    },
                    {
                        "key": "num11",
                        "name": "2023-02-11"
                    },
                    {
                        "key": "num12",
                        "name": "2023-02-12"
                    },
                    {
                        "key": "num13",
                        "name": "2023-02-13"
                    },
                    {
                        "key": "num14",
                        "name": "2023-02-14"
                    },
                    {
                        "key": "num15",
                        "name": "2023-02-15"
                    },
                    {
                        "key": "num16",
                        "name": "2023-02-16"
                    },
                    {
                        "key": "num17",
                        "name": "2023-02-17"
                    },
                    {
                        "key": "num18",
                        "name": "2023-02-18"
                    },
                    {
                        "key": "num19",
                        "name": "2023-02-19"
                    },
                    {
                        "key": "num20",
                        "name": "2023-02-20"
                    },
                    {
                        "key": "num21",
                        "name": "2023-02-21"
                    },
                    {
                        "key": "num22",
                        "name": "2023-02-22"
                    },
                    {
                        "key": "num23",
                        "name": "2023-02-23"
                    },
                    {
                        "key": "num24",
                        "name": "2023-02-24"
                    },
                    {
                        "key": "num25",
                        "name": "2023-02-25"
                    },
                    {
                        "key": "num26",
                        "name": "2023-02-26"
                    },
                    {
                        "key": "num27",
                        "name": "2023-02-27"
                    },
                    {
                        "key": "num28",
                        "name": "2023-02-28"
                    }
                ],
                loadings: false, //表格加载
                height: null, //表格高度
                // 分页部分
                currentPage: 1,
                pagesize: 10,
                count: 0,
                //表单验证
                value: '', //区分新增和修改
                tabRowIndex: null, //行角标
                tabColumnIndex: '', //列角标
            }
        },
        mounted() {
            let that = this
            that.initTableHeight() //初始化 表格高度
            window.addEventListener('resize', this.initTableHeight) //动态表格高度监听
            that.time = timer.benyuefen() //初始化默认获取本月日期，不含日
            //that.searchList() //初始化表格数据获取
        },
        methods: {
            // 保存数据区分新增和修改
            inputType(num) {
                this.value = num
            },
            // 获取点击的单元格角标位置
            getCell(row, column, cell, event) {
                this.tabRowIndex = row.index
                this.tabColumnIndex = column.index
            },
            // 把角标赋值给行和列，上面才可以直接拿到点击位置的坐标
            getRowColumn({
                row,
                column,
                rowIndex,
                columnIndex
            }) {
                row.index = rowIndex
                column.index = columnIndex
            },
            // 失去光标
            inputBlur() {
                // 把输入框隐藏
                this.tabRowIndex = null
                this.tabColumnIndex = ''
                // 发请求把修改的数据发送给后台
                // this.subForm()
            },
            // 表格高度
            initTableHeight() {
                let that = this
                var menus = that.$refs.menus.offsetHeight //搜索栏高度
                var footer = that.$refs.footer.offsetHeight //分页高度
                that.height = window.innerHeight - menus - footer - 25 + 'px'
            },
            // 获取表格数据
            searchList() {
                let that = this
                that.loadings = true
                axios.get(apiadmin_url + `zkjk_doctor_limit?month=${that.time}`, {
                    headers: {
                        token: session_token,
                        hosId: userinfo.hospital_id,
                    }
                }).then(res => {
                    console.log(res, 'res');
                    this.headered = res.data.data.header
                    this.tableData = res.data.data.data
                    this.tableData.sort(function (a, b) {
                        return a.ks > b.ks ? 1 : -1
                    })
                    that.loadings = false
                }).catch(error => {})
            },
            // 搜索按钮
            search() {
                let that = this
                that.currentPage = 1
                console.log(this.time, '时间');
                that.searchList()
            },
            // 分页
            handleSizeChange(val) {
                let that = this
                that.pagesize = val;
                that.searchList()
            },
            // 分页
            handleCurrentChange(val) {
                let that = this
                that.currentPage = val;
                that.searchList()
            },
            // 弹框内提交
            subForm() {
                let that = this
                if (this.value == 0) {
                    axios.post(apiadmin_url + "zkjk_doctor_limit", {
                        date: this.tableTimer,
                        doctor: this.nickName,
                        limit_num: this.ruleForm.show_num
                    }, {
                        headers: {
                            token: session_token,
                            hosId: userinfo.hospital_id,
                        }
                    }).then(response => {
                        if (response.data.code == 200) {
                            that.dialogVisible = false
                            this.$message({
                                showClose: true,
                                type: 'success',
                                message: response.data.message
                            });
                            that.search()
                        } else {
                            this.$message({
                                showClose: true,
                                message: response.data.message,
                                type: 'error'
                            });
                        }
                    }).catch(error => {})
                } else {
                    axios.put(apiadmin_url +
                        `zkjk_doctor_limit/1?date=${this.tableTimer}&doctor=${this.nickName}&limit_num=${this.ruleForm.show_num}`, {}, {
                            headers: {
                                token: session_token,
                                hosId: userinfo.hospital_id,
                            }
                        }).then(response => {
                        if (response.data.code == 200) {
                            that.dialogVisible = false
                            this.$message({
                                showClose: true,
                                type: 'success',
                                message: response.data.message
                            });
                            that.search()
                        } else {
                            this.$message({
                                showClose: true,
                                message: response.data.message,
                                type: 'error'
                            });
                        }
                    }).catch(error => {})
                }
            },
        }
}
</script>
