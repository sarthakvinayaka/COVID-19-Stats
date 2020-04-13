import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View,StyleSheet,Dimensions,Image,ScrollView,Button,Alert } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
 import axios from "axios";
export default class ExampleTwo extends Component {
static navigationOptions = {
    title: 'Demographics',
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
      tableHead: ['States', 'Confirmed','Recovered'],
      tableTitle: ['Maharashtra', 'Delhi', 'Tamil Nadu', 'Rajasthan',"Madhya Pradesh","Gujarat","Telangana","Uttar Pradesh", "Andhra Pradesh","Kerala","Karnataka","J&K", "Haryana","Punjab","West Bengal", "Bihar","Odisha","Uttarakhand","Himachal Pradesh", "Chhattisgarh","Assam","Chandigarh", "Jharkhand","Ladakh", "AndamanNicobar","Goa","Puducherry", "Manipur","Tripura" ,"Mizoram","Arunachal Pradesh","Dadra Nagar","Nagaland", "Daman and Diu","Lakshadweep", "Meghalaya","Sikkim"],
      
        
       loading: true,
    dataRecovered: {},
    totalCases: "",
    dataConfirmed: {},
    recoveredCases: "",
    
    }
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
    let { statewise } = res.data;
    
    let dataRecovered=statewise.map(entry => entry.recovered);

this.setState({

   dataConfirmed:statewise.map(entry => entry.confirmed),
      dataRecovered:statewise.map(entry => entry.recovered), 
    });
console.log(this.state.recoveredCases)
 };
  render() {
    const tableData= [
        [this.state.dataConfirmed[1], this.state.dataRecovered[1]],
        [this.state.dataConfirmed[2], this.state.dataRecovered[2]],
        [this.state.dataConfirmed[3], this.state.dataRecovered[3]],
        [this.state.dataConfirmed[4], this.state.dataRecovered[4]],
        [this.state.dataConfirmed[5], this.state.dataRecovered[5]],
        [this.state.dataConfirmed[6], this.state.dataRecovered[6]],
        [this.state.dataConfirmed[7], this.state.dataRecovered[7]],
        [this.state.dataConfirmed[8], this.state.dataRecovered[8]],
        [this.state.dataConfirmed[9], this.state.dataRecovered[9]],
        [this.state.dataConfirmed[10], this.state.dataRecovered[10]],
        [this.state.dataConfirmed[11], this.state.dataRecovered[11]],
        [this.state.dataConfirmed[12], this.state.dataRecovered[12]],
        [this.state.dataConfirmed[13], this.state.dataRecovered[13]],
        [this.state.dataConfirmed[14], this.state.dataRecovered[14]],
        [this.state.dataConfirmed[15], this.state.dataRecovered[15]],
        [this.state.dataConfirmed[16], this.state.dataRecovered[16]], 
        [this.state.dataConfirmed[17], this.state.dataRecovered[17]],
        [this.state.dataConfirmed[18], this.state.dataRecovered[18]],
        [this.state.dataConfirmed[19], this.state.dataRecovered[19]],
        [this.state.dataConfirmed[20], this.state.dataRecovered[20]],
        [this.state.dataConfirmed[21], this.state.dataRecovered[21]],
        [this.state.dataConfirmed[22], this.state.dataRecovered[22]],
        [this.state.dataConfirmed[23], this.state.dataRecovered[23]],
        [this.state.dataConfirmed[24], this.state.dataRecovered[24]],
        [this.state.dataConfirmed[25], this.state.dataRecovered[25]],
        [this.state.dataConfirmed[26], this.state.dataRecovered[26]],
        [this.state.dataConfirmed[27], this.state.dataRecovered[27]],
        [this.state.dataConfirmed[28], this.state.dataRecovered[28]],
        [this.state.dataConfirmed[29], this.state.dataRecovered[29]],
        [this.state.dataConfirmed[30], this.state.dataRecovered[30]],
        [this.state.dataConfirmed[31], this.state.dataRecovered[31]],
        [this.state.dataConfirmed[32], this.state.dataRecovered[32]],
        [this.state.dataConfirmed[33], this.state.dataRecovered[33]],
        [this.state.dataConfirmed[34], this.state.dataRecovered[34]],
        [this.state.dataConfirmed[35], this.state.dataRecovered[35]],
        [this.state.dataConfirmed[36], this.state.dataRecovered[36]],
        [this.state.dataConfirmed[37], this.state.dataRecovered[37]],
 
       

      ];
    const state = this.state;
    return (
      <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 1}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <TableWrapper style={styles.wrapper}>
            <Col data={state.tableTitle} style={styles.title}  textStyle={styles.text}/>
            <Rows data={tableData} flexArr={[1,1]} style={styles.row} textStyle={styles.text}/>
          </TableWrapper>
        </Table>
      </View>
      </ScrollView>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: {  height: 40,  backgroundColor: '#f1f8ff'  },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: { height: 30 },
  text: { textAlign: 'center' },
   scrollView: {
   
    marginHorizontal: 0,
  },
});