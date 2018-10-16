import React from 'react';
import { Button, View, Text, StyleSheet, Image } from 'react-native';
import {
    createBottomTabNavigator,
    createStackNavigator,
    opti
} from 'react-navigation';

class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Details!</Text>
            </View>
        );
    }
}

class HomeScreen extends React.Component {
    static navigationOptions = {
        tabLabel: 'Home',
        tabIcon: ({ tintColor }) => (
          <Image
            source={require('../img/family.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      }; 
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>首页</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}

class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>设置</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}

const HomeStack = createStackNavigator({
    Home: HomeScreen,
    Details: DetailsScreen,
});

const SettingsStack = createStackNavigator({
    Settings: SettingsScreen,
    Details: DetailsScreen,
});

const TabStack = createBottomTabNavigator(
    {
        Home: HomeStack,
        Details: DetailsScreen,
        Settings: SettingsScreen,
    },
    {
        /* Other configuration remains unchanged */
    }
)
  
export default class TabNavi extends React.Component {
    render() {
       return <TabStack />;
    }   
};