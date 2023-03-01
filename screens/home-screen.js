import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";
import { Text, View, StyleSheet } from "react-native";
import EventList from "../components/events/event-list";

const HomeScreen = () => {
  const navigation = useNavigation()

  return (
    <View>
      <EventList />
    </View>
  );
}

const styles = StyleSheet.create({
  mainView:{
    backgroundColor: "black"
  }
})


export default HomeScreen;