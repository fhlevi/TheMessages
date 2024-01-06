import { Route, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { getRoutesAppWithoutTabBar } from '@src/constants/navigation';

export const getTabBarOptions = (
    route: Partial<Route<string>>, { initialRoute }: any = {}
) => {
  const routeName = getFocusedRouteNameFromRoute(route) || initialRoute;

  const routesWithoutTabBar = [
    ...getRoutesAppWithoutTabBar(),
  ];

  return {
    tabBarVisible: !routesWithoutTabBar.flat().includes(routeName),
  };
};
