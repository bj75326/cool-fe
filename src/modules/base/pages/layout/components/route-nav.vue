<template>
  <div class="route-nav">
    <p v-if="app.browser.isMini" class="title">
      {{lastName}}
    </p>  
    <template v-else>
      <el-breadcrumb>
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-for="(item, index) in list" :key="index">
          {{(item.meta && item.meta.label) || item.name}}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </template>
  </div>  
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed } from 'vue';
import _ from "lodash";
import { useCool } from '/@/cool';
import { useBase } from '/$/base';

export default defineComponent({
  name: "route-nav",

  setup () {
    const { route } = useCool();
    const { app, menu } = useBase();

    // 数据列表
    const list = ref<any[]>([]);

    // 监听路由变化
    watch(() => route, (val: any) => {
      function deep (item: any) {
        if (route.path === "/") {
          return false;
        }

        if (item.path == route.path) {
          return item;
        } else {
          if (item.children) {
            const ret = item.children.map(deep).find(Boolean);

            if (ret) {
              return [item, ret];
            } else {
              return false;
            }
          } else {
            return false;
          }
        }
      }
      console.log('route-nav.vue run menu.group ', menu.group);
      list.value = _(menu.group).map(deep).filter(Boolean).flattenDeep().value();

      if (_.isEmpty(list.value)) {
        list.value.push(val);
      }
    }, {
      immediate: true,
      deep: true,
    });

    // 最后一个节点名称
    const lastName = computed(() => _.last(list.value).name);

    return {
      list,
      lastName,
      app,  
    };
  }
});

</script>

<style></style>