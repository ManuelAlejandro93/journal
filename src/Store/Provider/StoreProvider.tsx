import { Provider } from 'react-redux';
// import { store } from '@/Store';
import { store } from '../Store/Store';

interface Props {
  children: React.ReactNode;
}
export const StoreProvider = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};
