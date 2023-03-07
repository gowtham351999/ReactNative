/* eslint-disable prettier/prettier */
import React from "react";
import { View, Image, ImageBackground, Text, TextInput, Button } from "react-native";
import styles from "./styles";
import { TouchableOpacity } from "react-native";
import { Column, Row } from "../../component/common/RowCol";

export const Login = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/thangamLogo.png")}
        style={styles.backgroundImage}
      >
        <View style={styles.logoContainer}>
          <View style={styles.logoContent}>
            <Image
              source={require("../../assets/images/thangamSiteLogo.png")}
              style={{
                width: "70%",
                height: 80,
                resizeMode: "cover",
                marginTop: 50,
              }}
            />
          </View>
        </View>
        <View style={styles.centerContainer}>
          <View style={styles.centerContent}>
            <Text style={styles.loginText}>Login</Text>
          </View>
        </View>
        <Row p={2}>
          <Column xl={12}>
            <Text style={styles.mobileText}>Enter Mobile Number</Text>
            <TextInput
              style={styles.mobileInput}
              placeholder="Mobile Number"
              placeholderTextColor="#A09E9E"
            />
          </Column>
        </Row>
        <View style={styles.noAccountyContainer}>
          <View style={styles.noAccountBox}>
            <Text style={styles.noAccountText}>
              Don’t have an account?{" "}
              <Text style={styles.signUpText}>Sign Up</Text>
            </Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonBox}>
            <TouchableOpacity style={styles.signInButton}>
              <Text style={{textAlign:'center'}}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
