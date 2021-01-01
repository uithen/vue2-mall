<template>
    <div class="profile-list">
      <div v-for="(item, index) in listData" :key="index" class="item">
        <span class="icon">
          <svg :fill="item.iconColor"><use :xlink:href="item.icon"></use></svg>
        </span>
        <div class="info">{{item.info}}</div>
      </div>
    </div>
</template>

<script>
	export default {
    props: {
		  listData: {
		    type: Array,
        default() {
          return []
        }
      }
    }
	}
</script>

<style>
  .profile-list {
    background-color: #fff;
    font-size: 15px;
    color: #333;
  }

  .profile-list .item {
    height: 44px;
    line-height: 44px;
    position: relative;
  }

  .profile-list .icon svg {
    width: 18px;
    height: 18px;
  }

  .profile-list .item .icon {
    margin-top: 10px;
    position: absolute;
    left: 16px;
    top: -7px;
  }

  .profile-list .item .info {
    margin-left: 40px;
    border-bottom: 1px solid rgba(100, 100, 100, .1);
    padding-left: 5px;
  }

  .profile-list .item:last-of-type .info {
    border-bottom: none;
  }
</style>
