import { useContext } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import Context, { NewsContext } from './API/Context';
import NewsTabs from './components/NewsTabs';

function App() {

  const { darkTheme } = useContext(NewsContext)

  return (
    <View style={{ ...styles.container, backgroundColor: darkTheme ? '#282C35':'white' }}>
      <NewsTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
});


export default () => <Context>
  <App />
</Context>