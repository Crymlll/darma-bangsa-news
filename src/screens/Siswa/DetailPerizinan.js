import React,{ useState, useEffect } from 'react'
import { View, Text, Button, StyleSheet, Modal, Pressable, Image, TouchableOpacity} from 'react-native';
import { perizinanMenuStyle } from '../../components/Styles/perizinanStyle';

import moment from 'moment';
import 'moment/locale/id'
moment.locale('id');

import Ionicons from 'react-native-vector-icons/Ionicons';

import { firebase } from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const DetailPerizinan = ({route, navigation}) => {
    let data = route.params;

    let test = () => {
        console.log(data.perizinan.nama);
    }


  return (
    <View style={perizinanMenuStyle.container}>
    <View style={perizinanMenuStyle.blueBox}>
      <TouchableOpacity style={perizinanMenuStyle.iconBox}
        onPress={() => navigation.goBack()}
      > 
        <Ionicons name="ios-chevron-back" style={perizinanMenuStyle.Icon}/>
      </TouchableOpacity> 
      <Text style={perizinanMenuStyle.judul}>Izin Detail</Text>
    </View>
    <View style={perizinanMenuStyle.box}>
        <View>
            <Text>Detail Perizinan</Text>
            <Text>{data.perizinan.nama}</Text>
            <Text>{data.perizinan.kegiatan}</Text>
            <Text>{data.perizinan.tanggal}</Text>
            <Text>{data.perizinan.alasan}</Text>
            <Text>{data.perizinan.status}</Text>
        </View>
    </View>
  </View>
    
  )
}

export default DetailPerizinan