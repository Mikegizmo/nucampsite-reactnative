import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

const RenderCampsite = ({ campsite }) => {
  if(campsite) {
    return (
      <Card containerStyle={{ padding: 0 }}>
        <Card.Image source={campsite.image}>
          <View 
            style={{ 
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1
            }}>
            <View 
              style={{
                borderRadius: 10,
                width: '75%',
                padding: 3,
                backgroundColor: 'rgba(169, 169, 169, 0.6)'
              }}
            >
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontSize: 20,
                  textShadowColor: 'black',
                  textShadowOffset: {width: 2, height: 2},
                  textShadowRadius: 1
                }}
              >
                {campsite.name}
              </Text>
            </View>
          </View>
        </Card.Image>
        <Text style={{ margin: 20 }}>{campsite.description}</Text>
      </Card>
    );
  }
  return <View />;
};

export default RenderCampsite;