import { AppLayout } from '@root/app/layout/AppLayout';
import { AppPaths } from '@root/app/navigation';
import { CartPage, IndexPage, ShopGroupPage, ShopSubgroupPage } from '@root/pages';
import { useIntegration } from '@tma.js/react-router-integration';
import {
  bindMiniAppCSSVars,
  bindThemeParamsCSSVars,
  bindViewportCSSVars,
  initNavigator,
  useMiniApp,
  useThemeParams,
  useViewport,
} from '@tma.js/sdk-react';
import { type FC, useEffect, useMemo } from 'react';
import {
  Navigate,
  Route,
  Router,
  Routes,
} from 'react-router-dom';

export const App: FC = () => {
  const miniApp = useMiniApp();
  const themeParams = useThemeParams();
  const viewport = useViewport();

  useEffect(() => {
    return bindMiniAppCSSVars(miniApp, themeParams);
  }, [miniApp, themeParams]);

  useEffect(() => {
    return bindThemeParamsCSSVars(themeParams);
  }, [themeParams]);

  useEffect(() => {
    return viewport && bindViewportCSSVars(viewport);
  }, [viewport]);

  // Create new application navigator and attach it to the browser history, so it could modify
  // it and listen to its changes.
  const navigator = useMemo(() => initNavigator('app-navigation-state'), []);
  const [location, reactNavigator] = useIntegration(navigator);

  // Don't forget to attach the navigator to allow it to control the BackButton state as well
  // as browser history.
  useEffect(() => {
    navigator.attach();
    return () => navigator.detach();
  }, [navigator]);

  return (
    <Router location={location} navigator={reactNavigator}>
      <AppLayout>
        <Routes>
          <Route path={AppPaths.ROOT}>
            <Route index element={<IndexPage />} />
            <Route path={AppPaths.SHOP}>
              <Route path={AppPaths.SHOP_GROUP_NAME} element={<ShopGroupPage />} />
              <Route
                path={`${AppPaths.SHOP_GROUP_NAME}/${AppPaths.SHOP_SUBGROUP}/${AppPaths.SHOP_SUBGROUP_NAME}`}
                element={<ShopSubgroupPage />}
              />
            </Route>
            <Route path={AppPaths.CART} index element={<CartPage />} />
          </Route>
          <Route path="*" element={<Navigate to={AppPaths.ROOT} />} />
        </Routes>
      </AppLayout>
    </Router>
  );
};
