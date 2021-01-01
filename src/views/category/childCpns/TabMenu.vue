<template>
  <scroll-area id="tab-menu" v-if="Object.keys(categories).length!==0">
    <!-- <div class="menu-list"> -->
      <div class="menu-list-item"
           :class="{active: index===crtIndex}"
           v-for="(item, index) in categories"
           :key="index"
           @click="itemClick(index)"
      >
        {{item.title}}
      <!-- </div> -->
    </div>
  </scroll-area>
</template>

<script>
  import ScrollArea from 'components/common/scroll/ScrollArea'

	export default {
		name: "TabMenu",
    components: {
		  ScrollArea
    },
    props: {
		  categories: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
		  return {
		    crtIndex: 0
      }
    },
    methods: {
		  itemClick(index) {
        this.crtIndex = index
        this.$emit('selectItem', index)
      }
    },
	}
</script>

<style>
  #tab-menu {
    height: calc(100vh - 49px - 44px);
    /* overflow: hidden; */
    width: 100px;
    box-sizing: border-box;
    background-color: #f6f6f6;
  }

  .menu-list-item {
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 14px;
  }

  .menu-list-item.active {
    font-weight: 700;
    border-left: 3px solid var(--color-high-text);
    color: var(--color-high-text);
    background-color: #fff;
  }
</style>
