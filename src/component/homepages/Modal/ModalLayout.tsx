import { View, StyleSheet, Modal, Animated } from "react-native";
import React, { useState, useRef, useEffect, ReactNode } from "react";
import COLORS  from "../../../utils/Colors";
import { responsiveHeight } from "react-native-responsive-dimensions";

type Props = {
  visible: boolean;
  children: ReactNode
};

const ModalLayout = ({ children, visible }: Props) => {
  const scaleValue = useRef(new Animated.Value(0)).current;
  const [showModal, setShowModal] = useState(visible);

  useEffect(() => {
    toggleModal();
  }, [visible]);

  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <Modal transparent visible={showModal}>
      <View style={styles.container}>
        <Animated.View
          style={[styles.modalCon, { transform: [{ scale: scaleValue }] }]}
        >
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.modalbackgroundcolor,
  },

  modalCon: {
    flex: 1,
    backgroundColor: "white",
    marginTop: responsiveHeight(6),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // borderRadius: 20,
    height: '40%',
    width: "100%",
  },
});

export default ModalLayout;
