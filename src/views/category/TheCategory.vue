<template>
  <div id="category">
    <nav-bar class="cate-navbar">
      <template #center>商品分类</template>
    </nav-bar>
    <div class="content">
      <tab-menu :categories="categories" @selectItem="selectItem"/>
      <scroll-area id="tab-content" :data="[categoryData]">
        <div>
          <tab-content-cate :subcategories="showSubcategory"/>
          <tab-control :titles="['综合', '新品', '销量']" @tabClick="tabClick"/>
          <tab-content-detail :category-detail="showCategoryDetail"/>
        </div>
      </scroll-area>
    </div>
  </div>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'
import ScrollArea from 'components/common/scroll/ScrollArea'
import TabControl from 'components/content/tabControl/TabControl'


import TabMenu from './childCpns/TabMenu'
import TabContentCate from './childCpns/TabContentCate'
import TabContentDetail from './childCpns/TabContentDetail'

import {getCategory, getSubcategory, getCategoryDetail} from 'network/category.js'
export default {
  // mixins: [tabControlMixin],
  data() {
    return {
      categories: [],
      categoryData: [],
      crtIndex: -1,
      currentType: 'pop'
    }
  },
  components: {
    NavBar,
    ScrollArea,
    TabControl,

    TabMenu,
    TabContentCate,
    TabContentDetail
  },
  created() {
    this._getCategory()
  },
  methods: {
    async _getCategory() {
      // 1.获取分类数据
      const res = await getCategory()

      // 2.初始化每个类别的子数据(TabMenu)
      this.categories = res.data.category.list
      this.categories.forEach((item, i) => {
        this.categoryData[i] = {
          subcategories: {},
          categoryDetail: {
            'pop': [],
            'new': [],
            'sell': []
          }
        }
      })

      // 3.请求第一个分类的数据
      this._getSubcategories(0)
    },
    async _getSubcategories(index) {
      this.crtIndex = index;
      const mailKey = this.categories[index].maitKey;
      const res = await getSubcategory(mailKey)
      this.categoryData[index].subcategories = res.data
      this.categoryData = {...this.categoryData}
      this._getCategoryDetail('pop')
      this._getCategoryDetail('sell')
      this._getCategoryDetail('new')
    },
    async _getCategoryDetail(type) {
      // 1.获取请求的miniWallkey
      const miniWallkey = this.categories[this.crtIndex].miniWallkey
      // 2.发送请求,传入miniWallkey和type
      const res = await getCategoryDetail(miniWallkey, type)
      // 3.将获取的数据保存下来
      this.categoryData[this.crtIndex].categoryDetail[type] = res
      this.categoryData = {...this.categoryData}
    },
    selectItem(index) {
      this._getSubcategories(index)
    },
    tabClick(i) {
     this.currentType = i === 1
      ? 'new' : i === 2
      ? 'sell' : 'pop'
    },  
  },
  computed: {
    showSubcategory() {
      if (this.crtIndex === -1) return {}
      return this.categoryData[this.crtIndex].subcategories
    },
    showCategoryDetail() {
      if (this.crtIndex === -1) return []
      return this.categoryData[this.crtIndex].categoryDetail[this.currentType]
    }
  },  
}
</script>

<style>
  #category {
      height: 100vh;
    }

  .cate-navbar {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: bold;
  }

  .content {
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
    display: flex;
  }

  #tab-content {
    height: 100%;
    flex: 1;
  }
</style>