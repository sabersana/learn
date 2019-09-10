<template>
  <div>
    <nav-header></nav-header>
    <main>
        <section class="py-5">
            <h2 class="text-center mb-5">番剧推荐</h2>
            <div class="container border-bottom">
              <div class="filter row">
                <span class="col-md-2 text-center m-auto">推荐指数：</span>
                <div class="col-md-8">
                  <span class="btn btn-info mr-2 mt-1" v-for="(item, index) in filterAni" v-bind:class="{'btn-danger':nowfilter==item}" @click="changeFilter(item, index)">{{item}}</span>
                </div>
                <div class="col-md-2" v-if="nowfilter=='All'">
                  <span class="btn btn-info mr-2 mt-1" @click="changeSort">推荐指数
                    <span v-if="sortFlag">↓</span>
                    <span v-else>↑</span>
                  </span>
                </div>
              </div>
                <div class="border-top row mt-5 py-5" v-for="item in aniList">
<!--                    <img v-lazy="item.imgurl" class="col-md-3">-->
                    <img v-lazy="'img/'+item.imgurl" class="col-md-3">
                    <div class="col-md-9 mt-3">
                        <h3 class="text-center">{{ item.name }}</h3>
                      <p>推荐指数：<span v-for="num in item.star">⭐</span>({{item.star}})</p>
                      <p>年份：{{item.year}}年</p>
                        <p>简介：{{item.detail}}</p>
                        <button class="btn btn-lg bg-info mt-3 text-white" @click="watchVideo(item.videourl)">点击观看</button>
                    </div>
                </div>
            </div>
          <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="30" class="text-center" v-show="!busy">
            <img src="loading-bars.svg">
          </div>
        </section>
    </main>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
  import axios from 'axios'
  import NavHeader from './../../components/Header/header'
  import NavFooter from './../../components/Footer'
  import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
    export default {
        name: "List",
      data(){
          return {
            aniList: [],
            filterAni: [
              'All', '⭐⭐⭐⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐', '⭐⭐', '⭐'
            ],
            nowfilter: 'All',
            sortFlag: true,
            page: 1,
            pageSize: 3,
            busy: false,
            starNum: 0
          }
      },
      components: {
          NavHeader,
        NavFooter
      },
      mounted: function () {
        this.getAniList()
      },
      methods: {
        getAniList: function (flag) {
            axios.get('/anis',{
              params: {
                page: this.page,
                pageSize: this.pageSize,
                sort: this.sortFlag?-1:1,
                starNum:this.starNum
              }
            }).then(result=>{
              var res = result.data
              if (flag){
                this.aniList = this.aniList.concat(res.result.list)
                if (res.result.count<3) {
                  this.busy = true
                }
                else this.busy = false
              }else {
                this.aniList = res.result.list
              }
            })
          },
        changeFilter: function (val, index) {
          this.nowfilter = val
          this.starNum = index==0?0:6-index
          this.page = 1
          this.busy = false
          this.getAniList()
        },
        changeSort: function () {
          this.sortFlag = !this.sortFlag
          this.page = 1
          this.busy = false
          this.getAniList()
        },
        loadMore: function () {
          this.busy = true
          setTimeout(()=>{
            this.page++
            this.getAniList(true)
          }, 500)
        },
        watchVideo: function (url) {
          axios.get('/anis/watch').then(result=>{
            let res = result.data
            if(res.status == '10001') {
              alert(res.msg)
              return false
            }
            else {
              alert('追番成功')
              window.open(url)
            }
          })
        }
      }
    }
</script>
