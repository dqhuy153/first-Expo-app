import React from "react";
import { View, StyleSheet } from "react-native";
import { Image } from "react-native-expo-image-cache";

import AppText from "../components/AppText";
import colors from "../config/colors";

import ListItem from "../components/lists/ListItem";
function ListingDetailsScreen({ route }) {
    const listing = route.params;

    return (
        <View>
            <Image
                style={styles.image}
                uri={listing.images[0].url}
                preview={{ uri: listing.images[0].thumbnailUrl }}
                tint="light"
            />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{listing.title}</AppText>
                <AppText style={styles.price}>${listing.price}</AppText>
                <View style={styles.userContainer}>
                    <ListItem
                        image={require("../assets/huy.jpg")}
                        title="Dang Quang Huy"
                        subTitle="5 Listings"
                    />
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300,
    },
    detailsContainer: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10,
    },
    price: {
        color: colors.secondary,
        fontWeight: "500",
    },
    userContainer: {
        marginVertical: 40,
    },
});

export default ListingDetailsScreen;
