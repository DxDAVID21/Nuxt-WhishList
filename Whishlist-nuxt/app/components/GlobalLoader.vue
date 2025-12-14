<template>
  <transition name="fade">
    <div 
      v-if="loading"
      class="fixer inset-0 z-[9999] flex items.center justify-center backdrop-blur-sm-black/30 dark:bg-gray-900"
    >
      <div class="loader"></div>
    </div>
  </transition>
</template>

<script setup>
  const loading = useGlobalLoading();
</script>

<style>

.loader {
  width: 60px;
  height: 60px;
  border: 6px solid rgba(100, 100, 100, 0.3);
  border-top-color: #8b5cf6; 
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>