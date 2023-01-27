import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#FA748F',
    width: '100%',
    height: 100,
    alignItems: 'center'
  },
  avatarWrapper: {
    width: 80,
    height: 80,
    marginRight: 15,
    borderRadius: 120,
    overflow: 'hidden'
  },
  avatarImage: {
    width: '100%',
    height: '100%'
  },
  descWrapper: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
    alignSelf: 'stretch'
  },
  loginNameText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 3
  },
  nameText: {
    color: 'white',
    fontSize: 15,
    marginBottom: 3
  },
  emailText: {
    color: 'white',
    fontSize: 15,
    marginRight: 20
  },
  phoneText: {
    color: 'white',
    fontSize: 15,
  }
});
export default styles;
