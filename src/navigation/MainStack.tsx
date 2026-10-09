import {
  Home,
  Profile,
  Settings
} from '@/screens';
import { commonColors } from '@/styles/colors';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
  createBottomTabScreen,
} from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';

// Native tabs only support SF Symbols (iOS), Material Symbols (Android) or images — not SVG components
const tabIcon = (sfSymbol: string, materialSymbol: string): BottomTabNavigationOptions['tabBarIcon'] =>
  Platform.select({
    ios: { type: 'sfSymbol', name: sfSymbol },
    default: { type: 'materialSymbol', name: materialSymbol },
  } as any);

const MainTabs = createBottomTabNavigator({
  implementation: 'native',
  screenOptions: {
    headerShown: false,
    tabBarActiveTintColor: commonColors.primary,
  },
  screens: {
    Home: createBottomTabScreen({
      screen: Home,
      options: { tabBarIcon: tabIcon('house.fill', 'home') },
    }),
    Profile: createBottomTabScreen({
      screen: Profile,
      options: { tabBarIcon: tabIcon('person.crop.circle', 'account_circle') },
    }),
    Settings: createBottomTabScreen({
      screen: Settings,
      options: { tabBarIcon: tabIcon('gearshape', 'settings') },
    }),
  },
});

export const MainStack = MainTabs.getComponent();
