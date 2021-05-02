import React from "react";
import { View, Text, Image } from "react-native";
import { Card, CardItem } from "native-base";
import { deviceWidth } from "../../utility/styleHelper/appStyle";
import { TouchableOpacity } from "react-native-gesture-handler";
import Firebase from "../../Firebase/Firebase"

const ChatBox = ({ userId,  msg, img, onImgTap }) => {
  var currentUserID = Firebase.auth().currentUser.uid;
  let isCurrentUser = userId === currentUserID ? true : false;
  return (
    <Card
      transparent
      style={{
        maxWidth: deviceWidth / 2 + 10,
        alignSelf: isCurrentUser ? "flex-end" : "flex-start",
      }}
    >
      <View
        style={[
          isCurrentUser ? {
            backgroundColor: 'cyan',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 10,
            borderBottomLeftRadius : 20,
            borderBottomRightRadius: 0,
          } : {
            backgroundColor: "white",
            borderTopLeftRadius: 0,
            borderTopRightRadius: 20,
            borderBottomLeftRadius : 10,
            borderBottomRightRadius: 20,
          },
        ]}
      >
        {img ? (
          <CardItem cardBody>
            <TouchableOpacity onPress={onImgTap}>
              <Image
                source={{ uri: img }}
                resizeMode="cover"
                style={{ height: 200, width: deviceWidth / 2 }}
              />
            </TouchableOpacity>
          </CardItem>
        ) : (
          <Text
            style={{
              fontSize: 18,
              marginVertical: 5,
              fontWeight: "500",
              padding: 8,
              color: "black"}}
          >
            {msg}
          </Text>
        )}
      </View>
    </Card>
  );
};

export default ChatBox;
