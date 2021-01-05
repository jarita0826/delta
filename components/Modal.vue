<template>
  <span ref="originshortName" class="w-1/3">{{ item.shortening }}</span>
</template>

<script>
// export default {
//     methods:{
//         close(){

//         }
//     }
// }
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  width: 500px;
  box-shadow: 1px 2px 4px rgba(153, 155, 160, 0.12);
  border-radius: 4px;
  background: white;
}
</style>
