<script>
import { navList } from '@/common/config/navConfig.js';

export default {
  name: 'navHeader',
  inject: ['root'],
  data () {
    return {
      showMenu: false
    }
  },
  head () {
    return {
      htmlAttrs: {
        lang: this.$route.params.lang
      },
    }
  },
  computed: {
    list () {
      return navList
    },
    lang () {
      return this.$route.params.lang || 'en'
    },
    langRender () {
      return <div class="lang" onClick={this.clickLang}>EN</div>
    }
  },
  asyncData (data) {

  },
  mounted () {

  },
  methods: {
    clickLang () {
      this.$router.replace({ path: '/' })
    },
    showMenuHander () {
      this.showMenu = !this.showMenu
    },
    routerPush (data, type) {
      this.$router.push(data)
      if (type === 'closeMenu') {
        this.showMenu = false
      }
    }
  },
  render () {
    return (
      <div class="nav-box">
        <div class="nav-box-content container-box">
          <div class="nav-box-main container-content">
            <div class="nav-left">
              <div class="nav-logo" onClick={() => this.routerPush({ path: `/${this.lang}/` }, 'closeMenu')}>
                <img src={'/images/logo/logo.png'} alt="image" />
              </div>
              <div class="nav-content">
                {this.list.map((item, index) =>
                  <div class="nav-item" key={index}>
                    <NuxtLink to={{ path: `/${this.lang}/${item.path}/` }}>
                      <div class={['nav-item-title', { active: this.$route.path === `/${this.lang}/${item.path}/` }]}>
                        {item.name}
                      </div>
                    </NuxtLink>
                    <div class="nav-item-select">
                      {
                        item.children && item.children.map((items, i) => (
                          <div class="nav-item-select-item" key={i} onClick={() => this.$router.push({ path: `/${this.lang}/${item.path}/`, hash: '#' + items.target })}>
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
              <button class="btn-custom-nav" data-btnType="navDemoBtnCTA" onClick={this.root.startCtaHandler} >Get a demo</button>
              {this.langRender}
              <div class="nav-menu-icon" onClick={this.showMenuHander}>
                <img src={'/images/icon/menu-add-fill.png'} />
              </div>
            </div>
            <transition name="fade">
              <div class="nav-menu" v-show={this.showMenu}>
                {this.list.map((item, index) => <div class={['nav-menu-item', { active: this.$route.path === `/${this.lang}/${item.path}/` }]} key={index} onClick={() => this.routerPush({ path: `/${this.lang}/${item.path}/` }, 'closeMenu')}>
                  {item.name}
                  <div class="nav-menu-icon">
                    <img src={'/images/icon/arrow-right.png'} />
                  </div>
                </div>)}
                {this.langRender}
              </div>
            </transition>
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
  height: $navHeight;
  position: relative;
  background-color: #fff;
  .nav-box-content {
    height: $navHeight;
    padding: 0 80px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    background: #fff;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
    .nav-box-main {
      max-width: none;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      .nav-left {
        flex: 1;
        display: flex;
        align-items: center;
        margin-right: 35px;
        min-width: fit-content;
        height: 100%;

        .nav-logo {
          width: 186px;
          height: 63px;
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
          @include phone {
            display: none;
          }
          .nav-item {
            position: relative;
            height: 100%;
            display: flex;
            align-items: center;
            cursor: pointer;
            &::after {
              content: '';
              position: absolute;
              top: calc(100% - 3px);
              left: 0;
              width: 100%;
              height: 3px;
              background-color: #5523b0;
              display: none;
            }
            .nav-item-title {
              height: 100%;
              display: flex;
              align-items: center;
              font-size: 20px;
              font-weight: bold;
              line-height: 24px;
              color: #333333;
              min-width: fit-content;
              &.active {
                color: #5523b0;
              }
            }
            &:hover {
              &::after {
                display: block;
              }
              .nav-item-title {
                color: #5523b0;
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
                color: #333333;
                cursor: pointer;
                &:hover {
                  color: #5523b0;
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
          @include phone {
            display: none;
          }
        }
        .nav-menu-icon {
          display: none;
          width: 44px;
          height: 44px;
          margin-left: 25px;
          cursor: pointer;
          @include phone {
            display: block;
          }
        }
      }

      .nav-menu {
        position: fixed;
        top: $navHeight;
        left: 0;
        width: 100%;
        z-index: 999;
        background: #fff;
        padding: 30px 88px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.3);
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
}
@include phone {
  .nav-box {
    .nav-box-content {
      padding: 0;
      .nav-box-main {
        @include containerContent;
      }
    }
  }
}
</style>
