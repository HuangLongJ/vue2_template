<script>
import { navList } from '@/common/config/navConfig.js';

export default {
  name: 'navHeader',
  data () {
    return {
      showMenu: false
    }
  },
  computed: {
    list () {
      return navList
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
    },
    routerPush (data, type) {
      this.$emit('navigationTo', data)
      if (type === 'closeMenu') {
        this.showMenu = false
      }
    }
  },
  render () {
    return (
      <div class="nav-box">
        <transition name="fade">
          <div class="nav-box-content">
            <div class="nav-left">
              <div class="nav-logo" onClick={() => this.routerPush({ path: '/homePage' }, 'closeMenu')}>
                <img src={require('/static/images/logo/logo.png')} />
              </div>
              <div class="nav-content">
                {this.list.map((item, index) =>
                  <div class="nav-item" key={index}>
                    <div class={['nav-item-title', { active: this.$route.path === item.path }]} onClick={() => this.routerPush({ path: item.path })}>
                      {item.name}
                    </div>
                    <div class="nav-item-select">
                      {
                        item.children && item.children.map((items, i) => (
                          <div class="nav-item-select-item" key={i} onClick={() => this.routerPush({ path: item.path, query: items.query })}>
                            {items.title}
                          </div>
                        ))
                      }
                    </div>
                  </div>)
                }
              </div>
            </div>
            <div class="nav-right">
              <button class="btn-custom-nav">Get a demo</button>
              {this.langRender}
              <div class="nav-menu-icon" onClick={this.showMenuHander}>
                <img src={require('/static/images/icon/menu-add-fill.png')} />
              </div>
            </div>
            <transition name="fade">
              <div class="nav-menu" v-show={this.showMenu}>
                {this.list.map((item, index) => <div class={['nav-menu-item', { active: this.$route.path === item.path }]} key={index} onClick={() => this.routerPush({ path: item.path }, 'closeMenu')}>
                  {item.name}
                  <div class="nav-menu-icon">
                    <img src={require('/static/images/icon/arrow-right.png')} />
                  </div>
                </div>)}
                {this.langRender}
              </div>
            </transition>
          </div>
        </transition>
      </div>)
  }
}
</script>
<style scoped lang="scss">
$navheight: 134px;
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
  height: $navheight;
  position: relative;
  .nav-box-content {
    height: $navheight;
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
        height: 100%;
        @include navbar {
          display: none;
        }
        .nav-item {
          position: relative;
          height: 100%;
          display: flex;
          align-items: center;
          &::after {
            content: '';
            position: absolute;
            top: calc(100% - 3px);
            left: 0;
            width: 100%;
            height: 3px;
            background-color: #5523b0;
            transition: all 0.3s ease-in-out;
            display: none;
          }
          .nav-item-title {
            font-size: 20px;
            font-weight: bold;
            line-height: 24px;
            color: #333333;
            cursor: pointer;
            min-width: fit-content;
            &.active {
              color: #5523b0;
            }
          }
          &:hover {
            &::after {
              display: block;
            }
            .nav-item-select {
              display: block;
            }
          }
          .nav-item-select {
            display: none;
            position: absolute;
            top: 100%;
            left: -20px;
            background: #fff;
            z-index: 10;
            box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
            .nav-item-select-item {
              width: max-content;
              min-width: 100%;
              padding: 15px 20px;
              font-size: 18px;
              line-height: 24px;
              cursor: pointer;
              &:hover {
                background-color: rgba(0, 0, 0, 0.03);
              }
            }
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
      transition: all 0.3s ease-in-out;
      box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
      @media screen and (min-width: 1251px) {
        display: none;
      }
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
        &.active {
          color: #5523b0;
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
