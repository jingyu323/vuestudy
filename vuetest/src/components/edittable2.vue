<template>
<div class="divCaculateResultDisplay">
      <div class="divParamInput2">
        <label class="labConfidenceParamTitle">结果：</label>
      </div>
      <div class="divNotAllowCaculateResult">
        <div class="divResultTitle">
          <p class="pValueResult">导入数据</p>
        </div>
        <el-table
        border
        height="385"
        :data="tableData"
        class="tb-edit"
        style="width: 100%" @cell-click="getCell"
        :cell-class-name="tableCellClassName"
        highlight-current-row>
          <el-table-column fixed align="center" prop="createTime" label="创建时间" width="150">
          </el-table-column>
          <el-table-column prop="powerFactor" label="功率因素" width="" align="center">
            <template slot-scope="scope">
             <el-input v-model="scope.row.powerFactor" @blur="handleBlur(scope.row)"  v-if=' scope.row.index == tabRowIndex  && scope.column.index == tabColumnIndex' v-focus></el-input>
              <div v-else>
               <span  @click="handleEdit(scope.row,$event  )">{{scope.row.powerFactor}}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="selecttest" label="测试选择下拉" width="" align="center" :key="tableKey">
            <template slot-scope="scope">
              <el-select @change="changeFiremans"  v-model="scope.row.selecttest"  value-key="selecttest" v-if=' scope.row.index == tabRowIndex  && scope.column.index == tabColumnIndex'  @blur="handleBlur(scope.row)"  >
                <el-option
                                v-for="item in FloorsOptions"
                                :key="item"
                                :label="item"
                                :value="item"

                              ></el-option>
              </el-select>
              <div v-else>
                <span   @click="handleEdit(scope.row,$event  )">{{scope.row.selecttest}}</span>
              </div>
            </template>
          </el-table-column>
          <!-- 此处省略 -->
          <el-table-column label="操作">
            <template slot-scope="scope">
              <!--<el-button @click="handleEdit(scope.$index, scope.row)">编辑</el-button>-->
              <el-button type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination :current-page="page" :page-size="10" @current-change="CurrentChange" style="
            margin-top: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
          " background layout="prev, pager, next" :total="total">
        </el-pagination>
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
             page: 1,
             tabRowIndex: null, //行角标
             tabColumnIndex: '', //列角标
             limit: 10,
             total:0,
             tableKey: Math.random(),
             FloorsOptions:["test1","test2","test3","test4","test5"],
             tableData: [{
               createTime:"2024-01-01",
               powerFactor:"555",
               selecttest:"test1"
             },

             {
               createTime:"2024-02-01",
               powerFactor:"66",
               selecttest:"test2"
             },
             {
               createTime:"2024-03-01",
               powerFactor:"66",
               selecttest:"test3"
             },
             {
               createTime:"2024-04-01",
               powerFactor:"66",
               selecttest:"test4"
             },
             ],
        }
    },
methods: {
        getCell(row, column, cell, event) {
          console.log("行的内容:",row);
            console.log("列:",column.index);
            this.tabRowIndex = row.index
            this.tabColumnIndex = column.index
        },
        tableCellClassName({row, column, rowIndex, columnIndex}){//注意这里是解构
         //利用单元格的 className 的回调方法，给行列索引赋值
          row.index=rowIndex;
          column.index=columnIndex;
        },
        changeFiremans() {
              this.tableKey = Math.random()
            },

        handleBlur(row) {
        row.setingFlag = false;
        const param={
          id:row.id,
          powerFactor:row.powerFactor,
          currentA:row.currentA,
          currentB:row.currentB,
          currentC:row.currentC,
          voltage:row.voltage,
          voltageA:row.voltageA,
          voltageB:row.voltageB,
          voltageC:row.voltageC,
          activePower:row.activePower,
          selecttest:row.selecttest,
          reactivePower:row.reactivePower,
          apparentPower:row.apparentPower,
          calculatedPowerFactor:row.calculatedPowerFactor,
          energyConsumption:row.energyConsumption
        }
        this.tabRowIndex = null;
        this.tabColumnIndex = null;
         console.log("handleBlur========================");
        console.log(param);

      },
      handleEdit(row,el) {
        this.$set(row, 'setingFlag', true)

      },
      CurrentChange(){
        console.log("CurrentChange")
      },
    }
}
</script>
