<template>
  <div class="app-container">
    <h2>订单管理</h2>
    <el-divider></el-divider>

    <div>
      <el-radio-group v-model="radio1" @change="sel">
        <el-radio-button label="all">全部</el-radio-button>
        <el-radio-button label="0">未支付</el-radio-button>
        <el-radio-button label="1">待发货</el-radio-button>
        <el-radio-button label="2">待收货</el-radio-button>
        <el-radio-button label="3">待评价</el-radio-button>
        <el-radio-button label="4">已完成</el-radio-button>
      </el-radio-group>
    </div>
    <div>
      <div>
        <el-table :data="tableData" style="width: 100%" v-loading="loadding">
          <el-table-column prop="proname" label="商品"></el-table-column>
          <el-table-column prop="num" label="数量"></el-table-column>
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column label="地址">
            <template slot-scope="scope">
              {{ scope.row.province }} {{ scope.row.city }}
              {{ scope.row.county }} {{ scope.row.addressDetail }}
            </template>
          </el-table-column>
          <el-table-column prop="tel" label="电话"></el-table-column>
          <el-table-column prop="time" label="时间"></el-table-column>
          <el-table-column prop="originprice" label="原价"></el-table-column>
          <el-table-column label="状态">
            <template slot-scope="scope">
              <el-select
                @change="
                  (status) => {
                    handlechange(status, scope.row);
                  }
                "
                v-model="scope.row.status"
                placeholder="请选择"
              >
                <el-option label="未支付" :value="0">未支付</el-option>
                <el-option label="待发货" :value="1">待发货</el-option>
                <el-option label="待收货" :value="2">待收货</el-option>
                <el-option label="待评价" :value="3">待评价</el-option>
                <el-option label="已完成" :value="4">已完成</el-option>
              </el-select>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
import { orderlist, orderbystatus, updatastatus } from "@/api/order";

export default {
  data() {
    return {
      radio1: "广州",
      tableData: [],
      loadding: false,
      value: "2",
    };
  },
  methods: {
    handlechange(status, order) {
      // console.log(status)
      // console.log(order)

      updatastatus({ orderid: order.orderid, status: status }).then((res) => {
        console.log(res);
      });
    },
    sel(status) {
      // console.log(status)
      this.loadding = true;
      if (status == "all") {
        orderlist().then((res) => {
          this.tableData = res.data;
          this.loadding = false;
        });
      } else {
        orderbystatus({ status: status }).then((res) => {
          this.tableData = res.data;
          this.loadding = false;
        });
      }
    },
  },
};
</script>