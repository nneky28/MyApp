import { StyleSheet } from 'react-native';
import AppColors from '../../styles/AppColors';
import { height, width } from 'react-native-dimension'
import { FontFamily } from '../../utils/FontFamily';

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    backgroundColor: AppColors.white,
    width: width(90),
    paddingVertical: height(2.5),
    paddingHorizontal: width(5),
    justifyContent: 'flex-start',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: width(1.5),
    borderColor: AppColors.grayBorder,
    borderWidth: 1,
    marginTop: height(2)
  },
  dropDownContainer: {
    backgroundColor: AppColors.white,
    marginRight: width(20),
    width: width(100)
  },
  text1: {
    fontSize: width(2.75),
    color: AppColors.black3,
    fontFamily: FontFamily.BlackSansRegular
  },
  errorText: {
    fontSize: width(2.75),
    color: AppColors.red,
    fontFamily: FontFamily.BlackSansRegular
  },
  errorInput: {
    borderColor: AppColors.red,
  },
  downIcon: {
    width: width(4),
    height: width(4),
    position: 'absolute',
    left: width(77)
  },
  downIcon2: {
    width: width(4),
    height: width(4),
    position: 'absolute',
    left: width(82)
  },
}
);

export default styles;
