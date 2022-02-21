import { StyleSheet, Text, TouchableOpacity, View, Image, Dimensions } from 'react-native'
import React, { useContext } from 'react'
import { categories, sources } from '../API/api'
import { NewsContext } from '../API/Context'
import Carousel from 'react-native-snap-carousel'
import Search from '../components/Search'
const DiscoverScreen = () => {

  const { setCategory, setSource, darkTheme } = useContext(NewsContext)
  const windowWidth = Dimensions.get('window').width;
  const SLIDE_WIDTH = Math.round(windowWidth / 3.5)

  return (
    <View style={styles.discover} >

      <Search />

      <Text style={{ ...styles.subtitle, color: darkTheme ? 'lightgrey' : 'black' }} > Categories </Text>
      <Carousel
        layout={'default'}
        data={categories}
        renderItem={({ item, index }) => <TouchableOpacity style={styles.category} onPress={() => setCategory(item.name)} >
          <Image source={{ uri: item.pic }} style={styles.cateogryImgae} />
          <Text style={{ ...styles.name, color: darkTheme ? 'lightgrey' : 'black' }} > {item.name} </Text>
        </TouchableOpacity>}
        sliderWidth={windowWidth}
        itemWidth={SLIDE_WIDTH}
        activeSlideAlignment={'start'}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
      />

      <Text style={{ ...styles.subtitle, color: darkTheme ? 'lightgrey' : 'black' }} > Sources </Text>
      <View style={styles.sources} >
        {
          sources.map((s) => {
            return <TouchableOpacity
              onPress={() => setSource(s.id)}
              key={s.id}
              style={styles.sourceContainer}
            >
              <Image source={{ uri: s.pic }} style={styles.sourceImage} />
            </TouchableOpacity>
          })
        }
      </View>

    </View>
  )
}

export default DiscoverScreen

const styles = StyleSheet.create({
  discover: {
    padding: 10,
    alignItems: 'center'
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 8,
    marginHorizontal: 5,
    borderBottomColor: '#007FFF',
    borderBottomWidth: 4,
    alignSelf: 'flex-start',
    borderRadius: 10
  },
  cateogryImgae: {
    height: '60%',
    width: '100%',
    resizeMode: 'contain',


  },
  name: {
    fontSize: 12,
    textTransform: 'capitalize'
  },
  category: {
    height: 90,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  sources: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingVertical: 15
  },
  sourceContainer: {
    height: 150,
    width: '40%',
    borderRadius: 10,
    margin: 15,
    backgroundColor: '#cc313d'
  },
  sourceImage: {
    height: '100%',
    borderRadius: 10,
    resizeMode: 'cover'
  }
})