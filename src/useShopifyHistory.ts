import { useHistory } from 'react-router-dom';
import { ClientApplication } from '@shopify/app-bridge';
import { History } from '@shopify/app-bridge/actions';

export const useShopifyHistory = (app: ClientApplication<unknown>) => {
  const appBridgeHistory = History.create(app);
  const reactRouterHistory = useHistory();

  const to = (path: string) => {
    appBridgeHistory.dispatch(History.Action.REPLACE, path);
    reactRouterHistory.push(path);
  };

  return to;
};
