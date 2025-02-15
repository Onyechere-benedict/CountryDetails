import { View, Text, Image } from "react-native";
import React from "react";
import { useAppTheme } from "./AppTheme";
import { useTheme } from "./ThemeContext";

const CountryFlag = ({ flag }: { flag: string }) => {
	const { theme } = useTheme();
	return (
		<View style={{ padding: 16, backgroundColor: theme.colors.background }}>
			<Image
				source={{ uri: flag }}
				style={{ width: "100%", height: 200, borderRadius: 8 }}
				resizeMode="cover"
			/>
		</View>
	);
};

export default CountryFlag;
