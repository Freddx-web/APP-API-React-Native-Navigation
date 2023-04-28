import React, { useState, useEffect, Component } from "react";
import { View, Linking, Image, StyleSheet, ImageBackground } from "react-native";
import {
  Layout,
  TopNav,
  Text,
  Button,
  Section,
  SectionContent,
  useTheme,
  themeColor,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";

export default function ({ navigation }) {


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  scrollView: {
    
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flex: 0,
    marginTop: 20,
    marginHorizontal: 1,
  },
  cardtext: {
    fontSize: 19,
    color: "#000"
  },
});

//========================================================//
  // Return API
  //========================================================//


  const [fetchedState,setFetchedState]=useState(null);
  const [usersData,setUsersData]=useState([]);



  const getData=async()=>{
    try{


      
      const response=await fetch('https://jsonplaceholder.typicode.com/users');
      const data=await response.json();
      setUsersData(data)



    }
    catch(error){
      console.log(error)
    }
    finally{
      setFetchedState(null);
    }
  }


  useEffect(() => {
    setFetchedState('loading')
    setTimeout(()=>getData(),3000);
  },[])




  const { isDarkmode, setTheme } = useTheme();
	return (
	  <Layout>
      <TopNav
        middleContent="API Mobil"
        leftContent={
          <Ionicons
            name="chevron-back"
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        leftAction={() => navigation.goBack()}
        rightContent={
          <Ionicons
            name={isDarkmode ? "sunny" : "moon"}
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        rightAction={() => {
          if (isDarkmode) {
            setTheme("light");
          } else {
            setTheme("dark");
          }
        }}
      />
			<View
				style={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>


				<Text>Api email Usuarios</Text>

        <View style={styles.container}>
        {
         fetchedState ? <Text style={styles.loadingtext}>Loading Data...</Text> :
         usersData.map(_user=><Text style={styles.text} key={_user.id}>{_user.email}</Text>)
        }
        </View>




			</View>
		</Layout>
	);
}
