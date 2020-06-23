<template>
  <div class="comments" v-if="Object.keys(commentData).length > 0">
    <div class="header">
      <div class="title">
        <span>用户评价</span>
      </div>
      <div class="more">
        <span>更多</span>
        <i class="moreimg"></i>
      </div>
    </div>
    <div class="body"  v-for="(item, index) in commentData" :key="index">
      <div class="user">
        <div class="user-item">
          <img  :src="item.user.avatar">
          <span >{{item.user.uname}}</span>
        </div>
      </div>
      <div class="comment">
        <span>{{item.content}}</span>
      </div>
      <div class="record">
        <span class="date">{{item.created | getDateFormat}}</span>
        <span class="style">{{item.style}}</span>
      </div>
      <div class="images" v-if="item.images !== undefined">
        <div v-for="img in item.images">
          <img :src="img"/>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  import {dateFormat} from "common/util";

  export default {
    name: "DeComment",
    props: {
      commentData: {
        type: Array,
        default() {
          return []
        }
      }
    },
    filters: {
      getDateFormat(value) {
        let date = new Date(value*1000)
        return dateFormat(date, 'yyyy-MM-dd')
      }
    }
  }
</script>

<style scoped>
  .comments {
    padding: 25px 8px;
    border-bottom: 5px solid rgba(100, 100, 100, .1);
  }

  .header {
    display: flex;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
    height: 30px;
    color: #333333;
  }

  .title {
    font-size: 15px;
    width: 50%;
  }

  .more {
    font-size: 14px;
    width: 47%;
    text-align: right;
  }

  .moreimg {
    border-top: 1px solid #999;
    border-left: 1px solid #999;
    width: 9px;
    height: 9px;
    background-color: transparent;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
    display: inline-block;
    margin-left: .2rem;
  }

  .user {
    margin-top: 10px;
    /*display: flex;*/
    /*justify-content: space-between;*/
    /*text-align: center;*/
  }

  .user-item img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }

  .user-item span {
    font-size: 15px;
    position: relative;
    top: -15px;
    left: 10px;
    color: #333333;
  }

  .comment {
    padding: 0px 10px;
    font-size: 14px;
    margin-top: 10px;
  }

  .record {
    font-size: 12px;
    padding: 10px 10px;
    color: #999999;
  }

  .images {
    display: flex;
  }

  .images img{
    width: 65px;
    height: 65px;
  }
</style>
