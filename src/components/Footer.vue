<template>
    <div class="footer">
        <div class="container h-100">
            <div class="row p-5 h-100 justify-content-center align-items-center">
            <!--footer畫面左區-->
            <div class="col-sm-12 col-md-7">
                <h3>各校資源</h3>
                <p>新竹尖石地區的 泰雅核心素養，逐漸成形，1L.2S.3T 將是我們重要的願景</p>
                <button @click="gostores" class="btn custom-btn btn-outline-primary mr-4">
                  瞭解更多
                </button>
            </div>
            <!--footer畫面右區-->
            <div class="col-sm-12 col-md-4 m-3">
                <img src="/img/layout/footer.jpg" alt="" width="300">
            </div>
            </div>
        </div>
    </div>
</template>
 
<script>
export default {
  name: "Footer",
  props: {
    msg: String
  },
  methods:{
    gostores(){
      this.$router.replace('stores');
    },
  }
};
</script>
 
<style scoped lang="scss">
  .footer{
    padding-top: 7rem;
    width: 100%;
    min-height: 500px;
    text-align: left;
    color: #ffffff;
    background-color:darkslategray;
  }
</style>