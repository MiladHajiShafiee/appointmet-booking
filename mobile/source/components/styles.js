import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const searchBarStyles = StyleSheet.create({
  container: {
    height: hp('15%'),
    width: wp('100%'),
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    justifyContent: 'space-evenly',
    borderBottomColor: '#eaeaea',
  },
  textInput: {
    borderWidth: 1,
    height: hp('6%'),
    width: wp('90%'),
    fontSize: hp('2.6%'),
    paddingLeft: wp('12%'),
    borderRadius: wp('1%'),
    borderColor: 'darkorchid',
  },
  icon: {
    width: wp('5%'),
    position: 'absolute',
    resizeMode: 'contain',
    marginLeft: wp('4%'),
  },
});

export const messageStyles = StyleSheet.create({
  messageContainer: {
    color: 'white',
    height: hp('6%'),
    width: wp('80%'),
    alignItems: 'center',
    borderRadius: wp('1%'),
    justifyContent: 'center',
    backgroundColor: 'tomato',
  },
  messageText: {
    color: 'white',
  },
});

export const listStyles = StyleSheet.create({
  container: {
    height: hp('85%'),
    width: wp('100%'),
  },
  header: {
    height: hp('10%'),
    width: wp('100%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: 'gray',
    fontSize: hp('2.6%'),
    padding: wp('5%'),
    paddingLeft: wp('8%'),
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: wp('5%'),
    paddingVertical: wp('3%'),
    paddingHorizontal: wp('5%'),
  },
  icon: {
    width: wp('4%'),
    resizeMode: 'contain',
  },
  logoutText: {
    paddingLeft: wp('2%'),
    color: 'dimgray',
  },
  messageContainer: {
    height: hp('10%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const listItemStyles = StyleSheet.create({
  listContainer: {
    flex: 1,
    paddingBottom: hp('5%'),
  },
  listItem: {
    height: hp('12%'),
    width: wp('85%'),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    justifyContent: 'space-between',
  },
  itemText: {
    color: 'dimgray',
    fontSize: hp('2.2%'),
    paddingLeft: wp('5%'),
  },
  reserveText: {
    color: 'white',
    fontSize: hp('1.5%'),
    paddingVertical: wp('1%'),
    paddingHorizontal: wp('2%'),
  },
  reserveButton: {
    marginRight: wp('5%'),
    borderRadius: wp('1%'),
  },
});
