<template>
<div class="divCaculateResultDisplay">

      <div class="divNotAllowCaculateResult">
    <button @click="goback()">返回</button>
        <el-table
        border
        height="385"
        :data="tableData"
        class="tb-edit"
        style="width: 100%"
        @cell-click="getCell"
        :cell-class-name="tableCellClassName"
        highlight-current-row>
          <el-table-column fixed align="center" prop="createTime" label="创建时间" width="150">
          </el-table-column>
          <el-table-column prop="powerFactor" label="功率因素" width="" align="center">
            <template slot-scope="scope">
             <el-input v-model="scope.row.powerFactor" @blur="handleBlur(scope.row)"  v-if=' scope.row.index == tabRowIndex  && scope.column.index == tabColumnIndex' v-focus></el-input>
              <div v-else>
               <span  >{{scope.row.powerFactor}}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="selecttest" label="测试选择下拉" width="" align="center"  >
            <template slot-scope="scope">
              <el-select   v-focus v-model="scope.row.selecttest"   v-if=' scope.row.index == tabRowIndex  && scope.column.index == tabColumnIndex'  @change="handleBlur(scope.row)"    >
                <el-option
                  v-for="item in FloorsOptions"
                  :key="item"
                  :label="item"
                  :value="item"
                ></el-option>
              </el-select>
              <div v-else>
                <span   >{{scope.row.selecttest}}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="checkboxtest" label="测试check" width="" align="center"  >
            <template slot-scope="scope">
               <el-checkbox v-model="scope.row.checkboxtest"  v-if=' scope.row.index == tabRowIndex  && scope.column.index == tabColumnIndex'  @change="handleBlur(scope.row)" label="复选框测试"></el-checkbox>

               <div v-else>
                 <span   >{{scope.row.checkboxtest}}</span>
               </div>
            </template>
          </el-table-column>
          <el-table-column prop="radiotest" label="测试radio" width="" align="center"  >
            <template slot-scope="scope">
              <el-radio-group  v-if=' scope.row.index == tabRowIndex  && scope.column.index == tabColumnIndex' v-focus  @change="handleBlur(scope.row)" v-model="scope.row.radiotest" >
                <el-radio  label="男"  >男</el-radio>
                 <el-radio    label="女"  >女</el-radio>
              </el-radio-group>

              <div v-else>
                <span   >{{scope.row.radiotest}}</span>
              </div>

            </template>
          </el-table-column>
          <!-- 此处省略 -->
          <el-table-column label="操作">
            <template slot-scope="scope">
               <el-button @click="handleRowEdit(scope.$index, scope.row)">编辑</el-button>
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
             FloorsOptions:["test1","test2","test3","test4","test5"],
             tableData: [{
               createTime:"2024-01-01",
               powerFactor:"555",
               selecttest:"test1",
                checkboxtest:"false",
                radiotest:"",
               setingFlag:false
             },

             {
               createTime:"2024-02-01",
               powerFactor:"66",
               selecttest:"test2",
              checkboxtest:"false",
              radiotest:"",
               setingFlag:false
             },
             {
               createTime:"2024-03-01",
               powerFactor:"66",
               selecttest:"test3",
              checkboxtest:"false",
              radiotest:"",
               setingFlag:false
             },
             {
               createTime:"2024-04-01",
               powerFactor:"66",
               selecttest:"test4",
              checkboxtest:"false",
               radiotest:"",
               setingFlag:false
             },
             ],
        }
    },
methods: {
        getCell(row, column, cell, event) {
          console.log("行的内容:",row);
            this.tabRowIndex = row.index
            this.tabColumnIndex = column.index
        },
        goback: function() {
          window.history.back();
        },
        tableCellClassName({row, column, rowIndex, columnIndex}){//注意这里是解构
         //利用单元格的 className 的回调方法，给行列索引赋值
          row.index=rowIndex;
          column.index=columnIndex;
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
      handleRowEdit(index ,row){
         this.$set(row, "setingFlag", true)
      },
      handleDelete( index,  row){
        console.log(index  )
        console.log(  row)
      },
      CurrentChange(){
        console.log("CurrentChange")
      },
    }
}
</script>
