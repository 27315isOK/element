<template>
  <div class="app-container">
    <h2>轮播图</h2>
    <hr>
    <div>
      <img src="" >
    </div>
    <hr>
    <div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="bannerid" label="ID" width="180">
        </el-table-column>
        <el-table-column prop="link" label="link" width="180">
        </el-table-column>
        <el-table-column prop="alt" label="alt"> </el-table-column>
        <el-table-column prop="address" label="flag">
          <template slot-scope="scope">
            <el-switch
              @change="
                (flag) => {
                  switchchange(flag, scope.row);
                }
              "
              v-model="scope.row.flag"
              active-color="#13ce66"
              inactive-color="#ff4949"
            >
            </el-switch>
          </template>
        </el-table-column>

        <el-table-column prop="address" label="图片" width="220">
          <template slot-scope="scope">
            <img class="img" :src="scope.row.img" />
          </template>
        </el-table-column>

        <el-table-column prop="address" label="操作">
          <template slot-scope="scope">
            <el-button
              @click="deletebanner(scope.row, scope.$index)"
              type="danger"
              icon="el-icon-delete"
              circle
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <br />
    <div>
      <el-button type="primary" @click="dialogVisible = true"
        >添加轮播图</el-button
      >

      <el-dialog
        title="添加图片信息"
        :visible.sync="dialogVisible"
        width="60%"
        :before-close="handleClose"
      >
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="图片地址">
            <el-input v-model="form.address"></el-input>
          </el-form-item>
          <el-form-item label="alt">
            <el-input v-model="form.alt"></el-input>
          </el-form-item>
          <el-form-item label="连接">
            <el-input v-model="form.connect"></el-input>
          </el-form-item>
        </el-form>

        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="handleSubmit">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { banners, del, update, add } from "@/api/banner";

export default {
  data() {
    return {
      tableData: [],
      value: false,
      dialogVisible: false,
      form: {
        address: "",
        alt: "",
        connect: "",
      },
    };
  },
  methods: {
    deletebanner(obj, idx) {
      // console.log(idx)
      // console.log(obj)
      del({ bannerid: obj.bannerid }).then((res) => {
        this.tableData.splice(idx, 1); // 在页面中把删除掉的这张banner图删除
        // 重新请求一次banner列表数据
        // banners().then(res=>{
        //   this.tableData = res.data
        // })
      });
    },
    switchchange(flag, obj) {
       console.log(flag)
      // console.log(obj)
      update({ bannerid: obj.bannerid, flag: flag }).then((res) => {
        console.log(res);
      });
    },

    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },

    handleSubmit() {
      add({
        img: this.form.address,
        alt: this.form.alt,
        link: this.form.connect,
      }).then((res) => {
        if ((res.code = "200")) {
          this.dialogVisible = false;
          banners().then((res) => {
            this.tableData = res.data;
          });
          this.form = {
            address: "",
            alt: "",
            connect: "",
          };
          this.$message({
            message: "轮播图添加成功!",
            type: "success",
          });
        }
      });
    },
  },

  // onSubmit() {
  //       console.log('submit!');
  //     },

  mounted() {
    banners().then((res) => {
      console.log(res);
      this.tableData = res.data;
    });
  },
};
</script>

<style scoped>
.img {
  width: 200px;
}
</style>