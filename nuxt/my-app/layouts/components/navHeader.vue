<script>
export default {
  name: 'navHeader',
  data () {
    return {
      showMenu: false
    }
  },
  computed: {
    list () {
      return [
        {
          name: 'Products',
          url: ''
        },
        {
          name: 'Solutions',
          url: ''
        },
        {
          name: 'Case Studies',
          url: ''
        },
        {
          name: 'Company',
          url: ''
        },
      ]
    },
    langRender () {
      return <div class="lang">CN</div>
    }
  },
  asyncData (data) {

  },
  async mounted () {
    // 监听滚动事件 给nav-box 添加class 添加防抖
    await this.$nextTick()
    window.addEventListener('scroll', () => {
      const navBox = document.querySelector('.nav-box-content')
      if (window.scrollY > 0) {
        navBox.classList.add('nav-box-fixed')
      } else {
        navBox.classList.remove('nav-box-fixed')
      }
    })
  },
  methods: {
    showMenuHander () {
      this.showMenu = !this.showMenu
    }

  },
  render () {
    return (
      <div class="nav-box">
        <div class="nav-box-content">
          <div class="nav-left">
            <div class="nav-logo">
              <img src={require('/static/images/logo/logo.png')} />
            </div>
            <div class="nav-content">
              {this.list.map((item, index) => <div class="nav-item" key={index}>{item.name}</div>)}
            </div>
          </div>
          <div class="nav-right">
            <button class="btn-custom-nav">Get a demo</button>
            {this.langRender}
            <div class="nav-menu-icon" onClick={this.showMenuHander}>
              <img src={require('/static/images/icon/menu-add-fill.png')} />
            </div>
          </div>
          <div class="nav-menu" v-show={this.showMenu}>
            {this.list.map((item, index) => <div class="nav-menu-item" key={index}>
              {item.name}
              <div class="nav-menu-icon">
                <img src={require('/static/images/icon/arrow-right.png')} />
              </div>
            </div>)}
            {this.langRender}
          </div>
        </div>
      </div>)
  }
}
</script>
<style scoped lang="scss">
@mixin lang {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 5px;
  background: #ededee;
  font-size: 16px;
  font-weight: 500;
  color: #777777;
  cursor: pointer;
}
.nav-box {
  height: 134px;
  .nav-box-content {
    height: 134px;
    padding: 0 80px;
    display: flex;
    justify-content: space-between;
    &.nav-box-fixed {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 999;
      background: #fff;
      box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
    }
    @include pc {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 999;
      background: #fff;
      box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
    }
    .nav-left {
      flex: 1;
      display: flex;
      align-items: center;
      margin-right: 35px;
      min-width: fit-content;

      .nav-logo {
        max-width: 186px;
        max-height: 63px;
        img {
          cursor: pointer;
        }
      }
      .nav-content {
        flex: 1;
        display: flex;
        align-items: center;
        gap: 75px;
        margin-left: 70px;
        @include navbar {
          display: none;
        }
        .nav-item {
          font-size: 20px;
          font-weight: bold;
          line-height: 23.4px;
          color: #333333;
          cursor: pointer;
          min-width: fit-content;
          &:hover {
            color: #5604ef;
          }
        }
      }
    }

    .nav-right {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      min-width: fit-content;
      .lang {
        margin-left: 25px;
        @include lang;
        @include navbar {
          display: none;
        }
      }
      .nav-menu-icon {
        display: none;
        width: 44px;
        height: 44px;
        margin-left: 25px;
        cursor: pointer;
        @include navbar {
          display: block;
        }
      }
    }

    .nav-menu {
      position: fixed;
      top: 134px;
      left: 0;
      width: 100%;
      z-index: 999;
      background: #fff;
      padding: 30px 88px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      .nav-menu-item {
        width: 100%;
        padding: 46px 0;
        font-size: 24px;
        font-weight: bold;
        line-height: 23.4px;
        color: #333333;
        border-top: 1px solid #d8d8d8;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        &:first-child {
          border-top: none;
        }
        .nav-menu-icon {
          width: 10px;
          height: 20px;
        }
      }
      .lang {
        @include lang;
      }
    }
  }
}

</style>
