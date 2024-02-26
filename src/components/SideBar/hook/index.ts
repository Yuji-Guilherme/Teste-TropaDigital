import { useRouter } from 'next/navigation';
import { useSidebarStore } from '@/store/sidebar';

const useSideBar = () => {
  const router = useRouter();

  const {
    state: { minimized },
    actions: { changeMinimizeState }
  } = useSidebarStore();

  const handleExit = () => {
    //fn para deslogar
    router.push('/');
  };

  return {
    minimized,
    changeMinimizeState,
    handleExit
  };
};

export { useSideBar };
