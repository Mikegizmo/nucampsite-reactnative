import { Text, View, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { useState } from "react";
import { CAMPSITES } from '../shared/campsites';
import { PROMOTIONS } from '../shared/promotions';
import { PARTNERS } from '../shared/partners';

const FeaturedItem = ({ item }) => {
  if (item) {
    return (
      <Card containerStyle={{ padding: 0 }}>
        <Card.Image source={item.image}>
          <View 
            style={{ 
              justifyContent: 'center', 
              alignItems: 'center',
              flex: 1 
            }}
          >
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
                {item.name}
              </Text>
            </View>  
          </View>
        </Card.Image>
        <Text style={{ margin: 20 }}>{item.description}</Text>
      </Card>
    );
  }
  return <View />;
};

const HomeScreen = () => {
  const [ campsites, setCampsites ] = useState(CAMPSITES);
  const [ promotions, setPromotions ] = useState(PROMOTIONS);
  const [ partners, setPartners ] = useState(PARTNERS);

  const featCampsite = campsites.find((item) => item.featured);
  const featPromotion = promotions.find((item) => item.featured);
  const featPartner = partners.find((item) => item.featured);

  return (
    <ScrollView>
      <FeaturedItem item={featCampsite} />
      <FeaturedItem item={featPromotion} />
      <FeaturedItem item={featPartner} />
    </ScrollView>
  ); 
};

export default HomeScreen;