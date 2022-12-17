import { FlatList, Text, View } from "react-native";
import { Tile } from "react-native-elements";
import { useSelector } from "react-redux";
import { baseUrl } from "../shared/baseUrl";
import Loading from "../components/LoadingComponent";

const DirectoryScreen = ({ navigation }) => {
  const campsites = useSelector((state) => state.campsites);

  if (campsites.isLoading) {
    return <Loading />;
  }

  if (campsites.errMess) {
    return (
      <View>
        <Text>{campsites.errMess}</Text>
      </View>
    );
  }

  const renderDirectoryItem = ({ item: campsite }) => {
    return (
      <Tile 
        title={campsite.name}
        titleStyle={{ 
          textShadowColor: '#000',
          textShadowOffset: { width: -1, height: -1 },
          textShadowRadius: 10 
          }}
        caption={campsite.description}
        captionStyle={{
          textShadowColor: '#000',
          textShadowOffset: { width: -1, height: -1 },
          textShadowRadius: 10
          }}
        featured
        onPress={() => 
          navigation.navigate('CampsiteInfo', {campsite})
        }
        imageSrc={{ uri: baseUrl + campsite.image }}
      />
    );
  };

  return (
    <FlatList 
      data={campsites.campsitesArray}
      renderItem={renderDirectoryItem}
      keyExtractor={(item) => item.id.toString()}
    />  
  );  
};

export default DirectoryScreen;