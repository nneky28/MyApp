import { StyleSheet } from 'react-native';
import { height, width } from 'react-native-dimension';
import AppColors from '../../styles/AppColors';
import { FontFamily } from '../../utils/FontFamily';

const styles = StyleSheet.create({
  container: {
    width: width(100),
    paddingVertical: height(2),
    backgroundColor: AppColors.white,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  text: {
    color: AppColors.black1,
    fontSize: width(4),
    textAlign: 'center',
  },
  textContainer: {
    width: width(90),
    marginLeft: width(4)
  },
  text1: {
    color: AppColors.black1,
    fontSize: width(3.75),
    fontFamily: FontFamily.BlackSansBold,
  },
  text2: {
    color: AppColors.black1,
    fontSize: width(3.75),
    fontFamily: FontFamily.BlackSansRegular,
  },
  icon: {
    width: width(8),
    height: height(6),
    tintColor: AppColors.black1,
  },
  uncheckIcon: {
    width: width(3),
    height: height(2),
    tintColor: AppColors.black1,
    marginRight: width(8)
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: AppColors.gray1,
    // marginVertical: height(1),
    elevation: 0,
    marginTop: height(2)
  },
  line1: {
    width: '15%',
    height: 4,
    backgroundColor: '#E1E1E1',
    marginBottom: height(1.5),
    marginTop: height(0.5),
    elevation: 0,
    alignSelf: 'center',
  },

  contactComponentContainer: {
    justifyContent: 'center',
    paddingVertical: height(2),
    backgroundColor: AppColors.white,
    width: width(90),
    paddingHorizontal: width(2),
    alignSelf: 'center',
  },
  downIcon: {
    width: width(4),
    height: width(4),
  },
  listCompTitle: {
    fontSize: width(3.25),
    color: AppColors.black1,
  },
  row: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  leftIcon: {
    width: width(5),
    height: width(5),
  },
  rightIcon: {
    width: width(5),
    height: width(5),
  },
  filterContainer: {
    width: width(100),
    paddingHorizontal: 0
  },
});
export default styles;
