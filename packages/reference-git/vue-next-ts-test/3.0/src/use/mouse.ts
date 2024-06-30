import { onMounted, onUnmounted, ref } from 'vue';

// 获取鼠标坐标
function useMousePosition () {
  const x = ref(0);
  const y = ref(0);
  const update = (e: MouseEvent) => {
    x.value = e.pageX;
    y.value = e.pageY;
  };
  onMounted(() => {
    window.addEventListener('mousemove', update);
  });
  onUnmounted(() => {
    window.removeEventListener('mousemove', update);
  });
  return { x, y };
}

export {
  useMousePosition
};
