import React, {useEffect, useState} from "react";
import {View,StyleSheet,Text,SafeAreaView, FlatList} from "react-native";
import Article from "../components/Article";
import axios from "axios";


const SportScreen = () => {
    const [articles,setArticles] = useState([]);
    const getNews = () => {
        axios.get('https://newsapi.org/v2/everything?q=sports&apiKey=318acd81579a40d2aacbc41373c71e91&sortBy=publishedAt&sortOrder=desc',{
            params:{
                language: "es"
            }
        })
            .then( (response) =>{
                // handle success
                setArticles(response.data.articles);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    useEffect(() => {
        getNews();
    },[]);

    return(
        <SafeAreaView style={styles.container}>
            <FlatList
                data={articles}
                renderItem = {({item}) =>
                    <Article
                        urlToImage = {item.urlToImage}
                        title = {item.title}
                        description = {item.description}
                        author = {item.author}
                        publishedAt = {item.publishedAt}
                        sourceName = {item.source.name}
                        url={item.url}
                    />}
                keyExtractor = {(item) => item.title}
            />

        </SafeAreaView>
    )
}

export default SportScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
    }
})