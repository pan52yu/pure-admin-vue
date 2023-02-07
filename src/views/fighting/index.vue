<script setup lang="ts">
defineOptions({
  // name 作为一种规范最好必须写上并且和路由的name保持一致
  name: "Fighting"
});
const { VITE_PUBLIC_PATH, VITE_HANDSOME } = import.meta.env;
console.log(
  "当前环境变量VITE_PUBLIC_PATH为：",
  VITE_HANDSOME,
  VITE_PUBLIC_PATH,
  process.env.NODE_ENV
);
</script>

<template>
  <h1>加油 >>> 励志</h1>
</template>
