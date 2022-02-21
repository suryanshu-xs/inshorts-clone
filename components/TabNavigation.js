import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { AntDesign, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import { NewsContext } from '../API/Context';


const TabNavigation = ({ index, setIndex }) => {
    const { fetchNews, darkTheme, setDarkTheme } = useContext(NewsContext)
    return (
        <View style={{ ...styles.container, backgroundColor: darkTheme ? '#282c35' : 'white' }} >
            {
                index === 0 ? <View style={styles.leftIcon} >
                    <TouchableOpacity activeOpacity={0.5} style={{
                        paddingHorizontal: 5,
                    }} onPress={() => setDarkTheme(!darkTheme)} >
                        <Text style={{ ...styles.text, color: darkTheme ? 'lightgrey' : 'black' }} >
                            <MaterialCommunityIcons name="theme-light-dark" size={24} color="#007FFF" />
                        </Text>
                    </TouchableOpacity>
                </View> : <TouchableOpacity style={styles.left} onPress={() => setIndex(index === 0 ? 1 : 0)} >
                    <SimpleLineIcons name='arrow-left' size={14} color='#007FFF' />
                    <Text style={{ ...styles.text, color: darkTheme ? 'lightgrey' : 'black' }} >
                        Discover
                    </Text>
                </TouchableOpacity>
            }

            <Text style={{ ...styles.center, color: darkTheme ? 'lightgrey' : 'black' }} >
                {index ? "All News" : "Discover"}
            </Text>
            {
                index ? <TouchableOpacity style={styles.right} onPress={() => fetchNews('general')} >
                    <Text style={styles.text} >
                        <AntDesign name='reload1' size={24} color='#007FFF' />
                    </Text>
                </TouchableOpacity> : <TouchableOpacity style={styles.left} onPress={() => setIndex(index === 0 ? 1 : 0)} >
                    <Text style={{ ...styles.text, color: darkTheme ? 'lightgrey' : 'black' }} >
                        All News
                    </Text>
                    <SimpleLineIcons name='arrow-right' size={14} color='#007FFF' />
                </TouchableOpacity>
            }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 0.5
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 80,
        justifyContent: 'space-around',
    },
    leftIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 65,
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 14
    },
    center: {
        paddingBottom: 6,
        borderBottomColor: "#007FFF",
        borderBottomWidth: 2,
        fontSize: 16,
        fontWeight: "700",
        textAlign: 'center'
    },
    right: {
        width: 80,
        alignItems: "flex-end"
    }
})

export default TabNavigation