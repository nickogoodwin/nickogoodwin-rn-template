import React from 'react';
import {useAppSelector} from './hooks/reduxHooks';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from './theme/Colors';

import ThemeChanger from './components/ThemeChanger';

import Sample from './pages/Sample';

const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  const isDarkMode = useAppSelector(state => state.theme.isDarkMode);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            let icon;
            switch (route.name) {
              case 'Sample':
                icon = focused ? 'file' : 'file-outline';
                break;
              default:
                icon = focused ? 'help-circle' : 'help-circle-outline';
            }

            return (
              <Icon
                name={icon}
                size={20}
                color={
                  isDarkMode ? Colors.dark.text : Colors.light.text
                }></Icon>
            );
          },
          headerStyle: {
            backgroundColor: isDarkMode
              ? Colors.dark.ground
              : Colors.light.ground,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerShadowVisible: false,
          headerTintColor: isDarkMode ? Colors.dark.text : Colors.light.text,
          tabBarStyle: {
            backgroundColor: isDarkMode
              ? Colors.dark.ground
              : Colors.light.ground,
            borderTopWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
          },
        })}>
        <Tab.Screen
          name="Sample"
          component={Sample}
          options={{
            headerRight: () => <ThemeChanger />,
          }}
        />
        <Tab.Screen
          name="Sample2"
          component={Sample}
          options={{
            headerRight: () => <ThemeChanger />,
          }}
        />
        <Tab.Screen
          name="Sample3"
          component={Sample}
          options={{
            headerRight: () => <ThemeChanger />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
