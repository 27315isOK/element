<template>
  <div class="app-container">
    <h2>all</h2>
    <el-divider></el-divider>

    <div>
      <el-radio-group v-model="radio" size="small">
        <el-radio-button label="all">全部</el-radio-button>
        <el-radio-button
          :label="item"
          :key="index"
          v-for="(item,index) in type"
        ></el-radio-button>
      </el-radio-group>
      <el-divider></el-divider>

      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="id" label="ID" width="180"> </el-table-column>
        <el-table-column prop="name" label="名称" width="180">
        </el-table-column>
        <el-table-column prop="price" label="价格" width="180">
        </el-table-column>
        <el-table-column prop="part" label="分类" width="174">
        </el-table-column>
        <el-table-column prop="do" label="操作" width="174"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import { allpro, getCategory, searchPro } from "@/api/pro/all";
export default {
  data() {
    return {
      radio: "",
      type: [],
      tableData: [
        {
          id: "",
          name: "",
          price: "",
          part: "",
          do: "",
        },
      ],
    };
  },
  mounted() {
    getCategory().then((res) => {
        console.log(res)
      this.type = res.data;
    });
  },

  methods: {
      allpro(count,limitNum){
          
      }
  },
};
</script>