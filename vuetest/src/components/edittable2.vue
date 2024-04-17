<template>
  <div>
    <h2>AIQ file</h2>
    <button @click="goback()">返回</button>
    <table>
      <thead>
        <tr>
          <th v-for="column in columns" :key="column.key">{{ column.label }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in tableData" :key="index">
          <td v-for="(cell, cellIndex) in row" :key="cellIndex">
            <input v-if="isCellEditable(index, cellIndex)" v-model="row[cell]" type="text" />
            <span v-else>{{ cell }}</span>
          </td>
        </tr>
      </tbody>
    </table>
    <button @click="toggleEditing">Toggle Editing</button>
  </div>

</template>

<script>
export default {
  data() {
    return {
      columns:[{ key: 'name', label: 'Name' }, { key: 'age', label: 'Age' }], // 例如 [{ key: 'name', label: 'Name' }, { key: 'age', label: 'Age' }]
      tableData:[['Alice', 30], ['Bob', 25]], // 例如 [['Alice', 30], ['Bob', 25]]
      isEditing: false, // 控制是否处于编辑模式
    };
  },
  methods: {
    goback: function() {
      window.history.back();
    },
    isCellEditable(rowIndex, cellIndex) {
      return this.isEditing; // 或者根据其他逻辑返回true或false来决定哪个单元格可编辑
    },
    toggleEditing() {
      this.isEditing = !this.isEditing; // 切换编辑模式
    },
  },
};
</script>
