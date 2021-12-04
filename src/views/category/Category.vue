<template>
  <div id="category">
    <nav-bar class="navbar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="content">
      <tab-menu :categories="categories" @itemClick="categoryClick"> </tab-menu>
      <scroll id="tab-content">
        <div>
          <tab-content-category
            :subcategories="thisSubCategories"
          ></tab-content-category>
          <tab-control
            :titles="['综合', '新品', '销量']"
            @tabIndex="titleClick"
          ></tab-control>
          <tab-content-detail :categoryDetail="thisCategoriesDetail">
          </tab-content-detail>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabControl/TabControl";

import TabMenu from "./childCompn/TabMenu.vue";
import TabContentCategory from "./childCompn/TabContentCategory";
import TabContentDetail from "./childCompn/TabContentDetail";

import {
  getCategory,
  getSubcategory,
  getCategoryDetail,
} from "network/category";
import { POP, SELL, NEW } from "common/const";

export default {
  name: "Category",
  components: {
    NavBar,
    TabMenu,
    Scroll,
    TabContentCategory,
    TabControl,
    TabContentDetail,
  },
  data() {
    return {
      categories: [],
      categoriesData: [],
      currentIndex: 0,
      thisSubCategories: {},
      currentType: "",
      thisCategoriesDetail: [],
    };
  },
  created() {
    this._getCategory();
  },
  methods: {
    _getCategory() {
      getCategory().then((res) => {
        // 1.获取分类标题
        this.categories = res.data.category.list;
        // 2.初始化每个类别里的数据
        for (let i = 0; i < this.categories.length; i++) {
          this.categoriesData[i] = {
            subCategories: [],
            categoryDetail: {
              pop: [],
              new: [],
              sell: [],
            },
          };
        }
        // 3.请求第一个分类的数据
        this._getSubCategories(0);
      });
    },
    async _getSubCategories(index) {
      this.currentIndex = index;
      // 1.获取分类的key
      const maitKey = this.categories[index].maitKey;
      // 2. 获取副分类数据
      await getSubcategory(maitKey).then((res) => {
        this.categoriesData[index].subCategories = res.data;
        // 请求当前类别详细商品数据
        this._getCategoryDetail(POP);
        // this._getCategoryDetail(NEW);
        // this._getCategoryDetail(SELL);
      });
      // 返回当前类别分类数据
      this.thisSubCategories =
        this.categoriesData[this.currentIndex].subCategories;
    },
    async _getCategoryDetail(type) {
      this.currentType = type;
      // 1.获取请求的miniWallkey
      const miniWallkey = this.categories[this.currentIndex].miniWallkey;
      // 2.获取商品数据
      await getCategoryDetail(miniWallkey, type).then((res) => {
        this.categoriesData[this.currentIndex].categoryDetail[type] = res;
      });
      // 传递当前type的数据   
      this.thisCategoriesDetail =
        this.categoriesData[this.currentIndex].categoryDetail[this.currentType];
    },
    categoryClick(index) {
      // 点击分类列表调用获取数据方法
      this._getSubCategories(index);
    },
    titleClick(index) {
      // 根据点击标题显示相应商品
      this._getCategoryDetail([POP, NEW, SELL][index]);
    },
  },
};
</script>

<style scoped>
#category {
  height: 100vh;
}

.navbar {
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
  z-index: 999;
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
  overflow: hidden;
}
</style>