import { View, Text, Image, TouchableOpacity, useWindowDimensions, FlatList, ScrollView } from "react-native"
import { getStyles } from "./styles"
import { Feather, FontAwesome5 } from "@expo/vector-icons"
import { Link } from "expo-router"

const Footer = () => {
    const { width } = useWindowDimensions();
    const styles = getStyles(width);

    return (
        <View  style={styles.main_container}>

        </View>
    )}

export default Footer;