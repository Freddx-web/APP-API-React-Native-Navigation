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


import { FAB, Portal, Provider } from 'react-native-paper';


export default function ({ navigation }) {
 
 const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;



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


        





<Provider>
      <Portal>
        <FAB.Group
          open={open}
          visible
          icon={open ? 'calendar-today' : 'plus'}
          actions={[
            { icon: 'plus', onPress: () => console.log('Pressed add') },
            {
              icon: 'star',
              label: 'Star',
              onPress: () => console.log('Pressed star'),
            },
            {
              icon: 'email',
              label: 'Email',
              onPress: () => console.log('Pressed email'),
            },
            {
              icon: 'bell',
              label: 'Remind',
              onPress: () => console.log('Pressed notifications'),
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    </Provider>




























      </View>
    </Layout>
  );
}
