import { onMounted, onUnmounted } from 'vue';
import type { Mount, Unmount } from '../mixin/emits';

export const useOnMount = (emit: Mount & Unmount): void => {
  onMounted(() => {
    emit('mount');
  });
  onUnmounted(() => {
    emit('unmount');
  });
};
