// 最简代码，也就是这些字段必须有
export default {
  path: "/fighting",
  redirect: "/fighting/index2",
  meta: {
    title: "励志"
  },
  children: [
    {
      path: "/fighting/index2",
      name: "Fighting2",
      component: () => import("@/views/fighting/index2.vue"),
      meta: {
        title: "加油"
      }
    },
    {
      path: "/fighting/effort",
      name: "Effort",
      component: () => import("@/views/fighting/effort.vue"),
      meta: {
        title: "努力"
      }
    }
  ]
};
