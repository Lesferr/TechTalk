import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from 'react-native';
import { Icon } from 'react-native-elements';

const { width, height } = Dimensions.get('window');

const COLORS = {
  primary: '#ff6b81',
  secondary: '#ff7979',
  accent: '#eb4d4b',
  button: '#f18973',
  white: '#fff',
  background: '#fafafa',
  inputBg: '#dfe4ea',
  text: '#444',
};

export default function LoginScreen() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.bigCircle} />
        <View style={styles.smallCircle} />

        <View style={styles.centeredView}>
          <View style={styles.authBox}>
            <View style={styles.logoBox}>
              <Icon
                name="comments"
                type="font-awesome"
                color={COLORS.white}
                size={50}
              />
            </View>

            <Text style={styles.title}>Login</Text>

            <View style={styles.divider} />

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email</Text>

              <TextInput
                style={styles.input}
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                placeholder="Enter your email"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Password</Text>

              <TextInput
                style={styles.input}
                autoCapitalize="none"
                secureTextEntry
                textContentType="password"
                placeholder="Enter your password"
              />
            </View>

            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.registerText}>
                Don&apos;t have an account? Register Now
              </Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.forgotPasswordText}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },

  bigCircle: {
    position: 'absolute',
    top: -50,
    right: width * 0.25,
    width: height * 0.8,
    height: height * 0.8,
    borderRadius: 999,
    backgroundColor: COLORS.primary,
  },

  smallCircle: {
    position: 'absolute',
    bottom: width * -0.2,
    right: width * -0.3,
    width: height * 0.4,
    height: height * 0.4,
    borderRadius: 999,
    backgroundColor: COLORS.secondary,
  },

  centeredView: {
    width: '100%',
    top: '15%',
  },

  authBox: {
    width: '80%',
    alignSelf: 'center',
    paddingHorizontal: 16,
    paddingBottom: 30,
    backgroundColor: COLORS.background,
    borderRadius: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  logoBox: {
    top: -50,
    width: 100,
    height: 100,
    marginBottom: -50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999,
    backgroundColor: COLORS.accent,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },

  title: {
    marginTop: 10,
    fontSize: 26,
    fontWeight: '700',
    color: COLORS.text,
  },

  divider: {
    width: '100%',
    height: 1,
    marginTop: 8,
    backgroundColor: COLORS.text,
    opacity: 0.3,
  },

  inputGroup: {
    marginTop: 14,
  },

  label: {
    marginBottom: 6,
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.text,
  },

  input: {
    height: 44,
    paddingHorizontal: 12,
    borderRadius: 6,
    backgroundColor: COLORS.inputBg,
  },

  loginButton: {
    marginTop: 20,
    paddingVertical: 12,
    borderRadius: 6,
    backgroundColor: COLORS.button,
  },

  loginButtonText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.white,
  },

  registerText: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 16,
    color: COLORS.text,
  },

  forgotPasswordText: {
    marginTop: 12,
    textAlign: 'center',
    fontSize: 15,
    color: COLORS.text,
  },
});
