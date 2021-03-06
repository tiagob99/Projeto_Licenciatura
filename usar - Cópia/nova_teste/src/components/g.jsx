import React from 'react';
import $ from'jquery';
import 'jquery-ui-dist/jquery-ui';
import Album from './Album';
import { albums } from '../data/albums';
import * as make from'./makeyo';
import './makeyo';
import { bar_type } from './mikrosjs';
import {GooglePicker, MyCustomButton} from "react-google-picker";
import google from "react-google-picker";
import gapi from 'gapi-client';
const g = () => {
    var developerKey = 'AIzaSyCXXXfI5Kx8-9lQvpFjglJOOiag8naMWjI';
  
    
    // The Client ID obtained from the Google API Console. Replace with your own Client ID.
    var clientId = "465234973180-endijv8herlk2sgucru2r0sis78t8auu.apps.googleusercontent.com"
  
    // Replace with your own project number from console.developers.google.com.
    // See "Project number" under "IAM & Admin" > "Settings"
    var appId = "novo-269521";
  
    // Scope to use to access user's Drive items.
    var scope = ['https://www.googleapis.com/auth/drive.file'];

    var pickerApiLoaded = false;
    var oauthToken;

    // Use the Google API Loader script to load the google.picker script.
    function loadPicker() {
      gapi.load('auth', {'callback': onAuthApiLoad});
      gapi.load('picker', {'callback': onPickerApiLoad});
    }

    function onAuthApiLoad() {
      window.gapi.auth.authorize(
          {
            'client_id': clientId,
            'scope': scope,
            'immediate': false
          },
          handleAuthResult);
    }

    function onPickerApiLoad() {
      pickerApiLoaded = true;
      createPicker();
    }

    function handleAuthResult(authResult) {
      if (authResult && !authResult.error) {
        oauthToken = authResult.access_token;
        createPicker();
      }
    }

    // Create and render a Picker object for searching images.
    function createPicker() {
      
      if (pickerApiLoaded && oauthToken) {
        alert('antes');
        var view = new google.picker.View(google.picker.ViewId.DOCS);
        
        view.setMimeTypes("image/png,image/jpeg,image/jpg");
        
        var picker = new google.picker.PickerBuilder()
        alert('depois')
            .enableFeature(google.picker.Feature.NAV_HIDDEN)
            .enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
            .setAppId(appId)
            .setOAuthToken(oauthToken)
            .addView(view)
            .addView(new google.picker.DocsUploadView())
            .setDeveloperKey(developerKey)
            .setCallback(pickerCallback)
            .build();
         picker.setVisible(true);
      }
    }

    // A simple callback implementation.
    function pickerCallback(data) {
      if (data.action == google.picker.Action.PICKED) {
        var fileId = data.docs[0].id;
        alert('The user selected: ' + fileId);
      }
    }
    
  
    return (
        <body>
    <div id="result"></div>
    <button onClick={loadPicker}>Show Picker Dialog</button>

    
    <script type="text/javascript" src="https://apis.google.com/js/api.js"></script>
    <script>
    
        
    </script>
  </body>
    )
};

    export default g;