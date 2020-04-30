const g = () => {
    return (
    <GooglePicker clientId={'your-client-id'}
                      developerKey={'your-developer-key'}
                      scope={['https://www.googleapis.com/auth/drive.readonly']}
                      onChange={data => console.log('on change:', data)}
                      onAuthFailed={data => console.log('on auth failed:', data)}
                      multiselect={true}
                      navHidden={true}
                      authImmediate={false}
                      mimeTypes={['image/png', 'image/jpeg', 'image/jpg']}
                      query={'a query string like .txt or fileName'}
                      viewId={'DOCS'}>
                      <MyCustomButton />
                      </GooglePicker>
    )
};

    export default g;