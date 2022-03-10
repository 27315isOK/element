<template>
  <div class="app-container">
    <h2>用户查询</h2>
    <el-divider></el-divider>

    <div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="userid" label="用户id" width="350">
        </el-table-column>
        <el-table-column prop="head" label="头像" width="60">
        </el-table-column>
        <el-table-column prop="litname" label="昵称" width="100"> </el-table-column>
        <el-table-column prop="phonenum" label="电话" width="180"> </el-table-column>
        <el-table-column prop="name" label="用户名" width="100"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            tableData: [{
            userid: '',
            head: '待写',
            litname: '待写 ',
            phonenum:'',
            name:''
        }]
        }
    }
}
</script>