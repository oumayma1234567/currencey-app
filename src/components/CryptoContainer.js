import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList,Image  } from 'react-native';
import { List, ListItem } from "react-native-elements"; 
import FetchCoinData from './../Actions/FetchCoinData';




class CryptoContainer extends Component {
    componentDidMount() {
        this.props.FetchCoinData()
    }
    render() {
        // console.log("this props data", this.props.data)
        return (
                <FlatList
                    data={this.props.data}
                    renderItem={({item}) =>
                        <View>
                             <Image
          style={{width: 50, height: 50}}
          source={{uri: item.logo}}
        />
                            <Text style={{color:'black'}}>{item.name}</Text>
                            <Text style={{color:'black'}}>{item.symbol}</Text>
                            <Text style={{color:'black'}}>{item.slug}</Text>
                            <Text style={{color:'black'}}>{item.date_added}</Text>
                            
                            
                        </View>
                    }

                />
        )
    }
}

function mapStateToProps(state) {
    console.log("state crypto", state.crypto )
    // console.log('state.crypto.data.data', state.crypto.data && state.crypto.data.data)
    return {
        data: state.crypto.data && Object.keys(state.crypto.data).map(k => ({...state.crypto.data[k], key: k}))
        //state.crypto.data.map(el =>( {...el, key: el.id}))
    }
}

export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer)