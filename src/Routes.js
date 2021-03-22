import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Dashboard, SongDetail } from './screens'
import { RouteConstants } from './constants'
const Stack = createStackNavigator()
const Routes = () => {
    return (
        <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }} initialRouteName={RouteConstants.Home}>
            <Stack.Screen options={{ title: "SONGS" }} name={RouteConstants.Home} component={Dashboard} />
            <Stack.Screen options={{ title: "SONG DETAIL" }} name={RouteConstants.SongDetails} component={SongDetail} />
        </Stack.Navigator>
    )
}

export default Routes
