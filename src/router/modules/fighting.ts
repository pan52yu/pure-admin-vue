import { $t } from "@/plugins/i18n";

// 最简代码，也就是这些字段必须有
export default {
  path: "/fighting",
  redirect: "/fighting/index",
  meta: {
    title: $t("fighting.fighting")
  },
  children: [
    {
      path: "/fighting/index",
      name: "Fighting",
      component: () => import("@/views/fighting/index.vue"),
      meta: {
        title: "励志",
        // 通过设置showParent为true，显示父级
        showParent: true
      }
    }
  ]
} as RouteConfigsTable;
