import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createDrawerNavigator, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { Image, Linking } from 'react-native';
import { View } from 'react-native';
import { HomeStack, ProfileStack } from './stack';

const Drawer = createDrawerNavigator();

export const MyDrawer = () => {
  return (
    <Drawer.Navigator 
      drawerContent={(props) => {
        return (
          <View style={{flex:1, paddingTop:20, backgroundColor:"#99f6e4"}}>
            <View style={{justifyContent:"center", alignItems:"center", height:140}}>
              <Image 
                style={{width:100, resizeMode:"contain"}}
                source={require('../assets/images/logos/logo.png')}
              />
            </View>
            <DrawerItemList {...props} />
            <DrawerItem 
              label="More Info"
              onPress={()=> Linking.openURL('https://google.com')}
              icon={()=>(
                <Ionicons name='information' size={22} />
              )}
            />
          </View>
        );
      }}
        screenOptions={{
          headerShown: false,
        }}
    >
      <Drawer.Screen name="HomeStack" component={HomeStack} options={{title: 'Home',
        drawerIcon: ()=> <Ionicons name='home' size={22} />
      }} 
        
      />
      <Drawer.Screen name="ProfilesStack" component={ProfileStack} options={{title: 'Profiles', drawerIcon: ()=> <MaterialCommunityIcons name='face-man-profile' size={22} />}} />
    </Drawer.Navigator>
  );
}