<template>
  <div>
    <grid-view :cols="3" :lineSpace="15" :v-margin="17" v-if="subcategories.list">
      <div class="grid-item" v-for="(item, index) in subcategories.list" :key="index">
        <a :href="item.link">
          <img class="item-img" :src="item.image" alt="">
          <div class="item-text">{{item.title}}</div>
        </a>
      </div>
    </grid-view>
  </div>
</template>

<script>
  import GridView from 'components/common/gridView/GridView'

  export default {
    name: "TabContentCategory",
    components: {
      GridView
    },
    props: {
      subcategories: {
        type: Object,
        default() {
          return []
        }
      }
    }
  }
</script>

<style>
  .panel img {
    width: 100%;
  }

  .grid-item {
    text-align: center;
    font-size: 12px;
  }

  .grid-item .item-img {
    width: 80%;
  }

  .grid-item .item-text {
    margin-top: 15px;
  }
</style>
