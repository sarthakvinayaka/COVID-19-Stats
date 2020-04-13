import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View,StyleSheet,Dimensions,Image,ScrollView,Button,Alert } from 'react-native';
import axios from "axios";
import AnimatedNumber from 'react-native-animate-number';
import CoronaImage from "./image/home.jpg";
import donation from "./image/donation.jpg";
import Cough from "./image/cough.webp";
import tired from "./image/tired.webp";
import breathing from "./image/breathing.webp";
import { Card } from 'react-native-elements'

import hand from "./image/hand.webp";
import stayhome from "./image/stayhome.webp";
import mask from "./image/mask.webp";
import { AntDesign } from "@expo/vector-icons";


const { width, height } = Dimensions.get("window");
export default class Home extends Component {
  static navigationOptions = {
    title: 'Home',
    //Sets Header text of Status Bar
    headerStyle: {
      backgroundColor: '#f4511e',
      //Sets Header color
    },
    headerTintColor: '#fff',
    //Sets Header text color
    headerTitleStyle: {
      fontWeight: 'bold',
      //Sets Header text style
    },
  };






  constructor(props) {
    super(props);

    this.state = {
       loading: true,
    dataRecovered: {},
    totalCases: "",
    dataConfirmed: {},
    recoveredCases: "",
    };
  }

 async componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    this.setState({
      refreshing: true,
      loading: true
    });
    let res = await axios.get("https://api.covid19india.org/data.json");
    let { cases_time_series } = res.data;
    let dataConfirmed = cases_time_series.map(entry => entry.totalconfirmed);
    let dataRecovered=cases_time_series.map(entry => entry.totalrecovered);

this.setState({
      totalCases:dataConfirmed[dataConfirmed.length - 1]-1,
      recoveredCases:dataRecovered[dataRecovered.length - 1]
    });
console.log(this.state.totalCases);
let {totalconfirmed}= cases_time_series[cases_time_series.length - 1];

  };

  render() {
    const { navigate } = this.props.navigation;
  const a=this.state.totalCases;
    return (
        <ScrollView style={styles.scrollView}>
  <View style={styles.container}>
       <Image source={CoronaImage} style={styles.headerImage} />

   
   <Text
                style={{
                  opacity: 0.9,
                  fontSize: 24,
                  fontWeight: "bold",
                  top:70,
                  left:5
                }}
              >
                COVID-19 India Stats
              </Text>

           

               <Text
                style={{
                  opacity: 0.8,
                  fontSize: 20,
                  fontWeight: "bold",
                  top:90,
                  left:10,
                  color:'#FF0000'
                }}
              >
                Total Confirmed           
                                  <Text style={{   color:'#008000'
                }} >                Total Recovered </Text>

              </Text>



                     <Text
                style={{
                  opacity: 0.8,
                  fontSize: 20,
                  fontWeight: "bold",
                  top:100,
                  left:50
                }}
              >
                {this.state.totalCases}                                      {this.state.recoveredCases}
              </Text>

               <Text
                style={{
                  opacity: 0.9,
                  fontSize: 24,
                  fontWeight: "bold",
                  top:120,
                  left:10,
                 
                }}
              >
                Symptoms
              </Text>

<View style={styles.d}>
<Card >
    <View style={{ alignItems: 'center',
          position: "relative",
          flex: 1,
          bottom: -120,
            height:100,
           top:-20,
         }}>
 <Image source={Cough} style={styles.cough} />
                <Image source={tired} style={styles.Tired} />
                   <Image source={breathing} style={styles.breathing} />
                   
           <Text
                style={{
                  opacity: 0.8,
                  fontSize: 20,
                  fontWeight: "bold",
                  top:-80,
                  left:-5,
                  
                }}
              >

          
                Dry cough      Tiredness      Breathing 
              </Text>

              <Text
                style={{
                  opacity: 0.8,
                  fontSize: 20,
                  fontWeight: "bold",
                  top:-80,
                  left:97,
                  
                }}
              >

          
                Problem
              </Text>


                </View>
      
               </Card>
          </View>











             



   <Text
                style={{
                  opacity: 0.9,
                  fontSize: 24,
                  fontWeight: "bold",
                  top:130,
                  left:10,
                  
                }}
              >
     How to fight with Disease
              </Text>
 
<View style={styles.c}>
<Card >

          <View style={{ alignItems: 'center',
          position: "relative",
          flex: 1,
          bottom: -120,
             height:100,
           top:-20}}>
<Image source={hand} style={styles.hand} />
                 <Image source={stayhome} style={styles.home} />
                 <Image source={mask} style={styles.mask} />
           <Text
                style={{
                  opacity: 0.8,
                  fontSize: 20,
                  fontWeight: "bold",
                  right:25,
                  top:-50
                }}
              >     
              Wash Hands   Stay Home     Wear 
              </Text>
               <Text
                style={{
                  opacity: 0.8,
                  fontSize: 20,
                  fontWeight: "bold",
                  right:-130,
                  top:-73
                }}
              >     
          Mask
              </Text>
          </View>
         

           </Card>
        
   </View>



   <Text
                style={{
                  opacity: 0.9,
                  fontSize: 24,
                  fontWeight: "bold",
                  top:140,
                  left:10,
                  
                }}
              >
     How to Contribute
              </Text>

              <Text
                style={{
                  opacity: 0.8,
                  fontSize: 20,
                  fontWeight: "medium",
                  top:150,
                  justifyContent: 'center',
                  left:10
                
               
                }}
              >
A public charitable trust (PM CARES Fund) have been set up for helping the needy person. 
              </Text>
                   <Image source={donation} style={styles.donation} />

  <View style={{ alignItems: 'center',
          position: "relative",
          flex: 1,
          bottom: -120,
             height:100,
           top:110}}>


<Button
          title="Demographics"
        onPress={() =>navigate('Demographics')}
        />


           </View>
 <Text
                style={{
                  marginTop:110,
                  left:110
                }}
              >



               
               Made by Sarthak Vinayaka
              </Text>


    </View>
    </ScrollView>
    );
  }
}


const styles = StyleSheet.create({

      headerImage: {
    top:50,
    width,
    resizeMode: "contain",
    height: height * 0.3
  },
   donation: {
    top:130,
    width:400,
    resizeMode: "contain",
    
  },
    container: {
    flex: 1,
    backgroundColor: "#F2F4F5",

  },

  cough: {
   width: width - 48,
    resizeMode: "contain",
    height: height*0.08,
    borderRadius: 10,
    marginTop: 10,
    right:110,
    top:10
     
  },
   Tired: {
width: width - 48,
    resizeMode: "contain",
    height: height*0.08,
    borderRadius: 10,
    marginTop: 10,
    right:5,
    top:-45
  },
  breathing: {
  width:width-48,
    resizeMode: "contain",
    height: height * 0.08,
    top:-93,
    right:-100
  },
   scrollView: {
   
    marginHorizontal: 0,
  },
  hand: {
    width:width-48,
    resizeMode: "contain",
    height: height * 0.08,
    top:30,
    right:110
  },
  home: {
    width:width-48,
    resizeMode: "contain",
    height: height * 0.08,
    top:-18,
    right:0
  },
  chartTitle: {
    fontSize: 33,
    color: "gray",


  },
   paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    top:20
  },
    c: {

    top:125,

  
  },
  d: {

    top:110,

  },
  mask: {
  width:width-48,
    resizeMode: "contain",
    height: height * 0.08,
  top:-65,
    right:-100
  },
    });