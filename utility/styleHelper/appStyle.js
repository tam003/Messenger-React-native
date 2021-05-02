import { Dimensions } from "react-native";

export const { height: deviceHeight, width: deviceWidth } = Dimensions.get(
  "window"
);

const smallDeviceHeight = 650;

const getFieldDimesions = () => {
  if (deviceHeight > smallDeviceHeight) {
    return {
      fieldHeight: 50,
      fieldMarginVertical: 10,
      btnMarginVertical: 20,
      btnBorderRadius: 10,
      btnHeight: 50,
    };
  } else {
    return {
      fieldHeight: 40,
      fieldMarginVertical: 8,
      btnMarginVertical: 16,
      btnBorderRadius: 8,
      btnHeight: 40,
    };
  }
};

export const fieldHeight = getFieldDimesions().fieldHeight;
export const fieldMarginVertical = getFieldDimesions().fieldMarginVertical;
export const btnMarginVertical = getFieldDimesions().btnMarginVertical;
export const btnBorderRadius = getFieldDimesions().btnBorderRadius;
export const btnHeight = getFieldDimesions().btnHeight;
