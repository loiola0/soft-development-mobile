import { StatusBar } from 'expo-status-bar';
import {useEffect,useState} from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import { ActivityIndicator } from 'react-native-web';



export default function App() {
   const baseURL = 'https://api.github.com'
   const perPage = 20;

   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(false);
   const [page, setPage] = useState(1);

   useEffect(()=>{
    loadApi();
   },[]);

   async function loadApi(){
     if(loading) return;

     setLoading(true);
     const response = await axios.get(`${baseURL}/search/repositories?q=react&per_page=${perPage}&page=${page}`)
     setData([...data,...response.item]);
     setPage(page + 1);
     setLoading(false);
  }

  function FooterList({Load}){
    if(!Load) return null;

    return(
      <View style={styles.loading}>
        <ActivityIndicator size={25} color="#121212"/>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
      style={{marginTop: 35}}
      contentContainerStyle={{marginHorizontal: 20}}
      data={data}
      keyExtractor ={ item => String(item.id)}
      renderItem = {({item}) => <ListItem data={item}/>}
      onEndReached = {loadApi}
      onEndReachedThreshold = {0.5}
      ListFooterComponent = {<FooterList Load={loading}/>}
      >

      </FlatList>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem:{
    backgroundColor: '#121212',
    padding: 25,
    marginTop: 20,
    borderRadius: 10,
  },
  listText:{
    fontSize: 16,
    color: '#fff',
  },
  loading:{
    padding: 10
  }
});
