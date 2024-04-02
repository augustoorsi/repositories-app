import React from "react"
import { View, StyleSheet, Image } from "react-native"
import StyledText from "./StyledText"
import theme from "../theme.js"

const RepositoryStats = props => {
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
            <View>
                <StyledText align= "center"> Stars:</StyledText>
                <StyledText align= "center">{props.stargazersCount}</StyledText>
            </View>
            <View>
                <StyledText align= "center"> Forks:</StyledText>
                <StyledText align= "center"> {props.forksCount}</StyledText>
            </View>
            <View>
                <StyledText align= "center"> Rating:</StyledText>
                <StyledText align= "center"> {props.ratingAverage}</StyledText>
            </View>
        </View>
    )
}

const RepositoryItem = (props) => {
    return (
        <View  style={styles.container}>
            <Image style={styles.image} source={{uri: props.ownerAvatarUrl}}/>
            <StyledText fontWeight="bold" fontSize="subheading" > FullName: {props.fullName}</StyledText>
            <StyledText > Description: {props.description}</StyledText>
            <StyledText style={styles.language}> {props.language}</StyledText>
            <RepositoryStats {...props} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddinTop: 5
    },
    language: {
        padding: 4,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: "flex-start",
        borderRadius: 4,
        overflow: "hidden"
    },
    image:{
        width: 48,
        height:48,
        borderRadius: 4,
        overflow: "hidden"
    }

})

export default RepositoryItem