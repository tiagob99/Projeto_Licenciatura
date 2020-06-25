import firebase from 'firebase';
import { Component } from 'react';
import axios from 'axios';
export default axios.create({
    baseURL: 'https://projeto-licenciatura.firebaseio.com/'
})
