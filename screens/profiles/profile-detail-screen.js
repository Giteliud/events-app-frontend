import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { HeaderBackButton } from "@react-navigation/elements";

const ProfileDetailScreen = () => {
  const route = useRoute()
  const navigation = useNavigation()

  const { profileId } = route.params

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerLeft: () => (
        <HeaderBackButton
          tintColor="white"
          onPress={()=>navigation.goBack()}   />
      )
    })
  }, [])
  
  return (
    <View style={{padding:20}}>
      <Text style={{fontSize:24}}>
        Profile id: {profileId}
      </Text>
    </View>
  );
}



export default ProfileDetailScreen;