import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const splashStyles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'dimgray',
    fontSize: hp('3%'),
  },
});

export const signInStyles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  maintContainer: {
    height: hp('60%'),
    justifyContent: 'space-evenly',
  },
  loadingContainer: {
    height: hp('8%'),
    width: wp('80%'),
    alignItems: 'center',
    borderRadius: wp('1%'),
    justifyContent: 'center',
  },
  text: {
    color: 'dimgray',
    alignSelf: 'center',
    fontSize: hp('4%'),
  },
  signField: {
    borderWidth: 1,
    width: wp('80%'),
    fontSize: hp('2.2%'),
    paddingLeft: wp('5%'),
    borderRadius: wp('1%'),
    borderColor: 'darkorchid',
  },
  checkBoxContainer: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBoxText: {
    color: 'gray',
  },
  lockIconContainer: {
    width: wp('15%'),
    height: wp('15%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp('8%'),
    backgroundColor: 'darkorchid',
  },
  lockIcon: {
    width: wp('6%'),
    height: wp('6%'),
    resizeMode: 'contain',
  },
});

export const sellersAndSlotsStyles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  messageContainer: {
    height: hp('85%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
