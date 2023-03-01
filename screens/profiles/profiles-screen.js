import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

const ProfilesScreen = () => {
  const navigation = useNavigation()
  
  return ( 
    <View>
      <Text>Profiles Screen</Text>
      <Button title="some profile" onPress={()=>navigation.navigate('Profile', {profileId: 1})} />
    </View>
   );
}
 
export default ProfilesScreen;