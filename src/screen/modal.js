import React from 'react';
import { Button, View, Text, StyleSheet, Image } from 'react-native';
import {
    createStackNavigator,
} from 'react-navigation';

class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const params = navigation.state.params || {};

        return {
            headerRight: (
                <Button
                    onPress={() => navigation.navigate('MyModal')}
                    title="Info"
                    color="blue"
                />
            ),
            /* the rest of this config is unchanged */
        };
    };

    render() {
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
          </View>
        );
      }
}

class DetailsScreen extends React.Component {
    static navigationOptions = {
      title: 'Details',
    };
  
    render() {
      /* 2. Get the param, provide a fallback value if not available */
      const { navigation } = this.props;
      const itemId = navigation.getParam('itemId', 'NO-ID');
      const otherParam = navigation.getParam('otherParam', 'some default value');
  
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
          <Text>itemId: {JSON.stringify(itemId)}</Text>
          <Text>otherParam: {JSON.stringify(otherParam)}</Text>
          <Button
            title="Go to Details... again"
            onPress={() =>
              this.props.navigation.push('Details', {
                itemId: Math.floor(Math.random() * 100),
              })}
          />
          <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home',{otherParam:"自定义标题"})}
          />
          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      );
    }
  }

class ModalScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 30 }}>This is a modal!</Text>
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="Dismiss"
                />
            </View>
        );
    }
}

const MainStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Details: {
            screen: DetailsScreen,
        },
    },
    {
        /* Same configuration as before */
    }
);

const RootStack = createStackNavigator(
    {
        Main: {
            screen: MainStack,
        },
        MyModal: {
            screen: ModalScreen,
        },
    },
    {
        mode: 'modal',
        headerMode: 'none',
    }
);

export default class ModalCompoment extends React.Component {
    render() {
        return <RootStack />;
    }
};