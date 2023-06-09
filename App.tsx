import React from 'react';
import {StyleSheet} from 'react-native';
import {RNCamera} from 'react-native-camera';

/* WITHOUT REGEX */

// class App extends Component {
//   camera: any;
//   render() {
//     return (
//       <View style={styles.container}>
//         <RNCamera
//           style={styles.camraStyle}
//           ref={ref => {
//             this.camera = ref;
//           }}
//           onTextRecognized={text =>{
//             // console.log('Results', text?.textBlocks[0]?.value)
//             Alert.alert('', text?.textBlocks[0]?.value)
//           }}
//         />
//         <View style={styles.viewContainer}>
//           <TouchableOpacity
//             onPress={this.takePicture.bind(this)}
//             style={styles.capture}>
//             <Text style={styles.snapText}> SNAP </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   }
//   takePicture = async () => {
//     if (this.camera) {
//       const options = {quality: 0.5, base64: true};
//       const data = await this.camera.takePictureAsync(options);
//       console.log(data.uri);
//     }
//   };
// }

/* WITH REGEX */

const App = () => {
  const handleTextRecognized = (textBlocks: any) => {
    textBlocks.forEach((block: any) => {
      const {value} = block;

      // Check for email pattern
      const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;
      const email = value.match(emailRegex);
      if (email) {
        console.log('Email:', email[0]);
      }

      // Check for name pattern
      const nameRegex = /\b[A-Z][a-z]+\b/;
      const name = value.match(nameRegex);
      if (name) {
        console.log('Name:', name[0]);
      }

      // Check for contact number pattern
      const contactRegex = /\b\d{10}\b/;
      const contact = value.match(contactRegex);
      if (contact) {
        console.log('Contact Number:', contact[0]);
      }

      // Check for designation pattern
      const designationRegex = /\b(Manager|Director|Engineer)\b/i;
      const designation = value.match(designationRegex);
      if (designation) {
        console.log('Designation:', designation[0]);
      }

      // Check for department pattern
      const departmentRegex = /\b(IT|HR|Sales)\b/i;
      const department = value.match(departmentRegex);
      if (department) {
        console.log('Department:', department[0]);
      }

      // Check for address pattern
      const addressRegex = /\b\d+\s[A-Za-z]+\s[A-Za-z]+\b/;
      const address = value.match(addressRegex);
      if (address) {
        console.log('Address:', address[0]);
      }

      // Check for WhatsApp number pattern
      const whatsappRegex = /\b(\+\d{2})?\d{10}\b/;
      const whatsapp = value.match(whatsappRegex);
      if (whatsapp) {
        console.log('WhatsApp Number:', whatsapp[0]);
      }
    });
  };

  // useEffect(() => {
  //   // Other setup code
  //   // ...

  //   // Start text recognition
  //   RNCamera.requestPermissions()
  //     .then(() => {
  //       // Permission granted, start text recognition
  //       // Set up other camera configurations as needed
  //     })
  //     .catch(error => {
  //       console.log('Failed to request camera permission:', error);
  //     });
  // }, []);

  return (
    <RNCamera style={styles.camera} onTextRecognized={handleTextRecognized} />
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  camraStyle: {
    flex: 1,
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  viewContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  snapText: {
    fontSize: 14,
  },
  camera: {
    flex: 1,
  },
});
