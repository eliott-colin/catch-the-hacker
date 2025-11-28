import React, { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Svg, { G, Path, Polygon, Text as SvgText } from 'react-native-svg';

  const sectors = ["No question", "Big switch", "Look 2 cards", "Restart", "No question", "Big switch", "Look 2 cards", "Restart"];


  export default function Wheel() {
    const [winner, setWinner] = useState(""); 
    const rotation = useSharedValue(0);
    const [visible, setVisible] = useState(false);

    const num = sectors.length;
    const arc = (2 * Math.PI) / num;
    const size = 300;
    const radius = size / 2;

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ rotate: `${rotation.value}deg` }],
    }));

    const spin = () => {
      rotation.value = withTiming(
      rotation.value + 360 * 4 + Math.random() * 360,
      
      {
        duration: 3000,
        easing: Easing.out(Easing.cubic),
      },
      (finished) => {
        if (finished) {
          const finalRotation = rotation.value % 360 + 90;
          const sliceAngle = 360 / sectors.length;

          const winningIndex =
            Math.floor((360 - finalRotation) / sliceAngle) % sectors.length;
          
          runOnJS(setWinner)(sectors[winningIndex]);
          runOnJS(setVisible)(true);
        }
      }
    );
  };

    const getPath = (index: number) => {
      const start = arc * index;
      const end = arc * (index + 1);

      const x1 = radius + radius * Math.cos(start);
      const y1 = radius + radius * Math.sin(start);
      const x2 = radius + radius * Math.cos(end);
      const y2 = radius + radius * Math.sin(end);

      return `M${radius},${radius} L${x1},${y1} A${radius},${radius} 0 0,1 ${x2},${y2} Z`;
    };

    return (
      <View style={styleContainer.container}>
        <Svg width={300} height={20}>
          <Polygon
            points={`${radius - 10},0 ${radius + 10},0 ${radius},20`}
            fill="white"
          />
        </Svg>
        <View style= {{
          borderRadius: radius, 
          overflow: 'hidden', 
          shadowColor: "#000", 
          shadowOffset: { width: 0, height: 8 }, 
          shadowOpacity: 0.5, 
          shadowRadius: 10, 
          elevation: 12, 
        }}>
        <Animated.View style={animatedStyle}>
          <Svg width={size} height={size}>
            <G>
              {sectors.map((label, i) => (
                <G key={i}>
                  <Path
                    d={getPath(i)}
                    fill={i % 2 ? "#491844ff" : "#741d73ff"}
                  />
                  <SvgText
                    x={radius + (radius * 0.6) * Math.cos(arc * i + arc / 2)}
                    y={radius + (radius * 0.6) * Math.sin(arc * i + arc / 2)}
                    fill="#ffffffff"
                    fontSize={20}
                    textAnchor="middle"
                    alignmentBaseline="middle"
                    fontFamily="Anton"
                    transform={`rotate(${(arc * i + arc / 2) * (180 / Math.PI)}, ${
                      radius + (radius * 0.6) * Math.cos(arc * i + arc / 2)
                    }, ${
                      radius + (radius * 0.6) * Math.sin(arc * i + arc / 2)
                    })`}
                  >
                    {label}
                  </SvgText>
                </G>
              ))}
            </G>
          </Svg>
        </Animated.View>
        </View>
        
        
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity 
            onPress={spin}
            style={{ 
              backgroundColor: "#ffffffff", 
              paddingVertical: 15,
              paddingHorizontal: 35,
              borderRadius: 10,
              alignSelf: 'center',
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 5,
              elevation: 6,
            }}>
            <Text style={{ 
              fontSize: 20, 
              fontWeight: "bold", 
              textAlign: "center",
              color: "#521443ff"
            }}>
            Spin !
            </Text>
          </TouchableOpacity>
          
          <Text
          style={{
            color: "white", marginTop: 20,paddingHorizontal: 20, textAlign: 'center',
          }}> 
            Press the button to spin the wheel and discover your power !
          </Text>
        </View>      
        <Modal
          style ={styles.container}
          animationType="fade"
          transparent={true}
          visible={visible}
          onRequestClose={() => runOnJS(setVisible)(false)}
        >
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <Text style={{backgroundColor: '#a0a0d7' , padding: 20, fontSize: 24, fontWeight: 'bold', borderRadius: 10, marginBottom: 20}}>
              {winner || sectors[sectors.length - 1]}            
            </Text>
            <TouchableOpacity style={{ 
              
            }} onPress={()=> runOnJS(setVisible)(false)} >
              <Text style={{ 
              fontSize: 20, 
              fontWeight: "bold", 
              textAlign: "center",
              padding : 10,
              color: "white",
              borderRadius: 10,
              backgroundColor: "#521443ff"
              }}>
                Close ! X
              </Text>
            </TouchableOpacity> 
          </View>
        </Modal>
      </View>
    );
  }

  const styles = StyleSheet.create({ 
    container: {
      backgroundColor: "#ffffff", 
      paddingVertical: 15,
      paddingHorizontal: 35,
      borderRadius: 10,
      alignSelf: 'center',
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 5,
      elevation: 6,
    },
  });
  const styleContainer = StyleSheet.create({
    container: {
      backgroundColor: "#121149ff",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });
