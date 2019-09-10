<template>
  <header>
    <div class="myheader text-center pb-5">
      <div class="container">
        <nav class="navbar navbar-expand-md navbar-light">
          <a href="https://getbootstrap.com/" class="navbar-brand">Bootstrap</a>
          <button class="navbar-toggler" data-toggle="collapse"
                  data-target="#menu">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="menu">
            <ul class="navbar-nav">
              <li class="nav-item"><a href="https://v4.bootcss.com/" target="_blank" class="nav-link">Bootstrap4中文手册</a>
              </li>
              <li class="nav-item"><a href="https://getbootstrap.com/docs/4.3/getting-started/introduction/"
                                      target="_blank" class="nav-link">Bootstrap4英文手册</a></li>
              <li class="nav-item"><a href="https://getbootstrap.com/docs/4.3/getting-started/download/" target="_blank"
                                      class="nav-link">Bootstrap4下载</a></li>
            </ul>
          </div>
          <div class="float-right">
            <span class="mr-2" v-if="nickName">欢迎您，{{nickName}}</span>
            <a href="javascript:;" class="text-danger" @click="changeLogin" v-if="!nickName">login</a>
            <a href="javascript:;" class="text-danger" @click="loginout" v-else>login out</a>
          </div>
        </nav>
      </div>
      <h1 class="display-3 mb-5 mt-5">欢迎来到我的网站</h1>
      <div class="mb-5">
        <a href="https://www.baidu.com/" target="_blank" class="btn btn-danger btn-lg">百度一下</a>
        <a href="https://www.bilibili.com/" target="_blank" class="btn btn-info btn-lg">哔哩哔哩</a>
      </div>
    </div>
    <div class="zdp" v-show="isLogin" >
      <div class="login text-center">
        <p class="mt-4 bg-danger">{{ errorMsg }}</p>
        <p>账号：<input type="text" v-model="userName"></p>
        <p>密码：<input type="password" v-model="userPwd"></p>
        <button class="btn btn-info ml-3 float-left" @click="login">登陆</button>
        <button class="btn btn-info mr-3 float-right" @click="changeLogin">取消</button>
      </div>
    </div>
  </header>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "header",
    data() {
      return {
        isLogin: false,
        userName: '',
        userPwd: '',
        errorMsg: '请登录',
        nickName: ''
      }
    },
    mounted(){
      this.checkLogin()
    },
    methods: {
      changeLogin: function () {
        this.isLogin = !this.isLogin
      },
      login: function () {
        if (!this.userName || !this.userPwd){
          this.errorMsg = '请输入账号或密码'
          return
        }
        axios.post('/users/login', {
          userName: this.userName,
          userPwd: this.userPwd
        }).then(response=>{
          let res = response.data
          if (res.status == '0' ){
            this.errorMsg = '登陆成功'
            this.isLogin = false
            this.nickName = res.result.userName
          } else {
            this.errorMsg = '账号密码错误'
          }
        })
      },
      loginout: function () {
        axios.post('/users/loginout').then(res=>{
          if (res.data.status == '0') {
            this.nickName = ''
          }
        })
      },
      checkLogin: function () {
        axios.get('/users/islogin').then(res=>{
          this.nickName = res.data.result
        })
      }
    }
  }
</script>

<style scoped>
  .myheader {
    background: url("./img/header.jpg") no-repeat;
  }

  .login {
    height: 200px;
    width: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -150px;
    margin-top: -100px;
    border: 1px solid #ccc;
    z-index: 9999;
    background-color: rgb(255, 255, 255);
  }

  .login input {
    width: 200px;
  }

  .zdp {
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, .3);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
  }
</style>
