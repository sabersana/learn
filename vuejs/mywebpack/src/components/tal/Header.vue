<template>
  <div>
    <div class="alert alert-info text-center mb-0 alert-dismissible fade show">
      快来一起学习吧
      <button class="close" data-dismiss="alert">&times;</button>
    </div>
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
              <li class="nav-item"><a href="https://v4.bootcss.com/" target="_blank" class="nav-link">Bootstrap4中文手册</a></li>
              <li class="nav-item"><a href="https://getbootstrap.com/docs/4.3/getting-started/introduction/" target="_blank" class="nav-link">Bootstrap4英文手册</a></li>
              <li class="nav-item"><a href="https://getbootstrap.com/docs/4.3/getting-started/download/" target="_blank" class="nav-link">Bootstrap4下载</a></li>
            </ul>
          </div>
        </nav>
      </div>
      <h1 class="display-3 mb-5 mt-5">欢迎来到我的网站</h1>
      <div class="mb-5">
        <a href="https://www.baidu.com/" target="_blank" class="btn btn-danger btn-lg">百度一下</a>
        <a href="https://www.bilibili.com/" target="_blank" class="btn btn-info btn-lg">哔哩哔哩</a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
  .myheader {
    background: url("img/header.jpg") no-repeat;
  }
</style>
