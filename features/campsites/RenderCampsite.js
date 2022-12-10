import { Text, View, StyleSheet } from 'react-native';
import { Card, Icon } from 'react-native-elements';

const RenderCampsite = (props) => {
  const { campsite } = props;
  if(campsite) {
    return (
      <Card style={styles.cardContainer}>
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
                paddingHorizontal: 12,
                paddingVertical: 3,
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
        <Icon
          name={props.isFavorite ? 'heart' : 'heart-o'}
          type='font-awesome'
          color='#f50'
          raised
          reverse
          onPress={() =>
            props.isFavorite
              ? console.log('Already set as a favorite')
              : props.markFavorite()
          }
        />
      </Card>
    );
  }
  return <View />;
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 0,
    margin: 0,
    marginBottom: 20
  }
});

export default RenderCampsite;