<script>
export default {
  name: 'introduceFour',
  render () {
    return (
      <div class="box container-box" id="clients">
        <div class="content container-content">
          <div class="title big-title">Serving over 500 leading global B2B companies</div>
          <div class="img">
            <img src={require('~/assets/images/components/homePage/introduceFour1.png')} alt="" />
          </div>
        </div>
      </div>
    )
  }
}
</script>
<style scoped lang="scss">
.box {
  padding: 100px 0;
  background: #f6f7ff;
  scroll-margin-top: 80px;
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .title {
      margin-bottom: 90px;
    }
    .img {
      height: 704px;
    }
  }
}
@include phone {
  .box {
    .content {
      .title {
        margin-bottom: 60px;
      }
      .img {
        width: 100%;
        height: 323px;
      }
    }
  }
}
</style>
