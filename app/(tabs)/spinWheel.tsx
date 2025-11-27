import React, { useState } from "react";
import { Button, Modal, StyleSheet, Text, View } from "react-native";
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Svg, { G, Path, Polygon, Text as SvgText } from 'react-native-svg';

const sectors = ["Bien", "Très bien", "Excellent", "Incroyable" ];


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
        setVisible(true);
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
          fill="red"
        />
      </Svg>
      <Animated.View style={animatedStyle}>
        <Svg width={size} height={size}>
          <G>
            {sectors.map((label, i) => (
              <G key={i}>
                <Path
                  d={getPath(i)}
                  fill={i % 2 ? "#ffcd29" : "#ff6240"}
                />
                <SvgText
                  x={radius + (radius * 0.6) * Math.cos(arc * i + arc / 2)}
                  y={radius + (radius * 0.6) * Math.sin(arc * i + arc / 2)}
                  fill="#000"
                  fontSize={20}
                  textAnchor="middle"
                  alignmentBaseline="middle"
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
      
      
      <View style={{ marginTop: 20 }}>
        <Button title="🎡 Spin!" onPress={() => { spin();}}  />
      </View>
      <Text>Appuie sur le bouton pour faire tourner la roue et découvrir ton niveau ! {rotation.value}</Text>   
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={() => setVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <Text>
            Winner: {winner || "Incroyable"}            
          </Text>
          <Button title="Fermer" onPress={() => setVisible(false)} />  
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
const styleContainer = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
