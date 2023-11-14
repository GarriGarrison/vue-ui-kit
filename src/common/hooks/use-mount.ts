import { onMounted, onUnmounted } from 'vue';
import type { MountEvent, UnmountEvent } from '../mixin/emits';

export const useOnMount = (emit: MountEvent & UnmountEvent): void => {
  onMounted(() => {
    emit('mount');
  });
  onUnmounted(() => {
    emit('unmount');
  });
};
