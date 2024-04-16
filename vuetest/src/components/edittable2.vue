
<template>
  <div style="height:900px;">
    <h2>AIQ file</h2>
    <button @click="goback()">返回</button>
    <el-form :model="ruleForm" :rules="rules" name="ruleForm" ref="ruleForm" :label-width="'auto'">
  	<el-table name="ruleFormt" v-show="ruleForm.visitType === 2 && ruleForm.visitingDetailDTOS && ruleForm.visitingDetailDTOS.length" :data="ruleForm.visitingDetailDTOS" :span-method="arraySpanMethod" style="width: 90%" tooltip-effect="light">
          <el-table-column name="date"   prop="date" label="来访日期" width="130px"></el-table-column>
          <el-table-column name="来访时间段"  prop="time" label="来访时间段" min-width="160">
              <template v-slot="{row, $index: index}">
                  <el-table name="232" v-if="row.visitingReqList && row.visitingReqList.length" :data="row.visitingReqList" :show-header="false" :span-method="arraySpanMethod" show-summary :summary-method="getPeopleTotal" style="width: 100%" class="hb-row" tooltip-effect="light">
                      <el-table-column name="time" prop="time" min-width="160">
                          <template v-slot="{row: childRow, $index}">
                              <el-form-item label-width="0px" :prop="`visitingDetailDTOS[${index}].visitingReqList[${$index}].time`" :rules="rules.visitTime" :show-message="false">
                                  <el-time-picker v-if="editType !== 'look' && itemState === 0" :disabled="!childRow.isDelete" is-range v-model="childRow.time" :picker-options="{minTime: ($index > 0 && row.visitingReqList[$index-1].time) ? row.visitingReqList[$index-1].time[1] : ''}" value-format="HH:mm" format="HH:mm" size="small" range-separator="~" start-placeholder="开始" end-placeholder="结束" placeholder="选择时间范围" style="width: 90%"></el-time-picker>
                                  <span v-else>{{childRow.time}}</span>
                              </el-form-item>
                          </template>
                      </el-table-column>
                      <el-table-column name="num"  prop="num" min-width="80">
                          <template v-slot="{row: childRow, $index}">
                              <el-form-item label-width="0px" :prop="`visitingDetailDTOS[${index}].visitingReqList[${$index}].num`" :rules="rules.maxPeople" :show-message="false">
                                  <el-input v-if="editType !== 'look'" v-model.number="childRow.num" type="number" size="small" placeholder="人数" />
                                  <span v-else>{{childRow.num}}人</span>
                              </el-form-item>
                          </template>
                      </el-table-column>
                      <el-table-column  name="caozup"    v-if="editType !== 'look' && itemState === 0" align="center" min-width="120">
                          <template v-slot="{$index}">
                              <el-button v-if="$index === (row.visitingReqList.length-1)" type="text" size="middle" @click="addCustomTime(row)">添加</el-button>
                               <el-button v-if="row.visitingReqList.length !== 1" type="text" size="middle" @click="delCustomTime(row, $index)">删除</el-button>
                          </template>
                      </el-table-column>
                  </el-table>
              </template>
          </el-table-column>
         <el-table-column name="itemState1"     prop="num" label="来访人数" min-width="80">
              <template v-slot="{row, $index}">
                  <el-form-item v-if="row.isEdit" style="width: 90%; margin: 0 auto" size="small" :prop="`visitingDetailDTOS[${$index}].reportName`" :show-message="false" :rules="rules.reportName">
                      <j-autocomplete v-model="row.reportName" :suggestOptions="reportNameList" :maxlength="50" trim placeholder="写不写都行，会被合并掉" />
                  </el-form-item>
                  <span v-else>{{row.reportName}}</span>
              </template>
          </el-table-column>
          <el-table-column  name="itemState"    v-if="editType !== 'look' && itemState === 0" label="操作" align="center" min-width="120">
              <template v-slot="{row}">
                  <template v-if="row.isEdit">
                      <el-button style="color:#303133" type="text" size="middle" @click="cancelEdit(row)">取消</el-button>
                      <el-button type="text" size="middle" @click="saveAction(row)">保存</el-button>
                  </template>
                  <template v-else>
                      <el-button type="text" size="middle" @click="editAction(row)">修改</el-button>
                      <el-button type="text" size="middle" @click="delAction(row)">删除</el-button>
                  </template>
              </template>
          </el-table-column>
      </el-table>
  </el-form>

  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "monthdata",
  data() {
   return {
   	 ruleForm: {
   		visitingDetailDTOS: [{
        date:"2012-09-08",
        time:"09:09",
        num:33,
        visitingReqList:[{  time:"02:09" },{time:"04:09"},{ time:"09:09" }],


      },
      {
        date:"2012-04-08",
        time:"09:09",
        num:33,
        visitingReqList:[{  time:"02:09" },{time:"04:09"},{ time:"09:09" }],

      }],
      visitType:2,
   	},
    editType:2,
    itemState:0,
   	rules: {
   		visitTime: {required: true, message: '请选择来访时间', trigger: 'change'},
             maxPeople: {required: true, message: '请输入人数上限', trigger: 'change'},
   	}
   }
  },
  methods: {
    goback: function() {
      window.history.back();
    },
    dotChart: function() {
      console.log("ssss");
      //  var echarts = require('echarts');

  },
  arraySpanMethod({ row, column, rowIndex, columnIndex }) {
        if (column.label === '来访时间段') {
            return [1, 3];
        } else if(['来访时间段', '来访人数', '操作'].includes(column.label)) {
            return [0, 0];
        }
    },

  addCustomTime(row) {
        row.visitingReqList.push({
            key: 0,
            time: '',
            num: '',
            numCopy: 0,
            maxNum: 0,
            isDelete: true
        })
    },

    delCustomTime(row, index) {
        row.visitingReqList.splice(index, 1);
    },

  getPeopleTotal(param) {
            const { columns, data } = param;
            const sums = [];
            columns.forEach((column, index) => {
                if (index === 0) {
                  sums[index] = '总人数';
                  return;
                }
                const values = data.map(item => Number(item[column.property]));
                if (!values.every(value => isNaN(value))) {
                    sums[index] = values.reduce((prev, curr) => {
                        const value = Number(curr);
                        if (!isNaN(value)) {
                            return prev + curr;
                        } else {
                            return prev;
                        }
                    }, 0);
                    sums[index] += ' 人';
                }
            });
            return sums;
  },
  mounted() {
    this.dotChart();
  }
},
}
</script>



<style    >
.el-table {
        .el-form-item {
            margin-bottom: 0;
        }
        .hb-row {
            ::v-deep {
                .el-table__cell {
                    border-bottom: none;
                }
                .el-table__body-wrapper {
                    overflow-x: hidden;
                }
                .el-table__cell {
                    background-color: #fff;
                    padding: 3px 0;
                }
            }
            .cell {
                padding-left: 0;
            }
        }
        .el-table::before {
            background-color: transparent;
        }
        ::v-deep {
            .el-table__body tr:hover>td{
              background-color: rgba($color: #fff, $alpha: 1)!important;
            }
            .el-table__body tr.current-row>td{
              background-color: rgba($color: #fff, $alpha: 1)!important;
            }
        }

    }
</style>
