import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { getNewsAPI, getSourceAPI } from './api'



export const NewsContext = createContext()

const Context = ({ children }) => {

    const [news, setNews] = useState([])
    const [category, setCategory] = useState("general")
    const [index, setIndex] = useState(1);
    const [source, setSource] = useState()
    const [darkTheme, setDarkTheme] = useState(true)

    useEffect(() => {
        fetchNews()
    }, [category])

    const fetchNewsFromSource = async () => {
        try {
            const { data } = await axios.get(getSourceAPI(source))
            setNews(data)
            setIndex(1)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchNewsFromSource()
    }, [source])

    const fetchNews = async (cat = category) => {
        const { data } = await axios.get(getNewsAPI(cat))
        setNews(data)
        setIndex(1)
    }
    return <NewsContext.Provider value={{ news, index, setIndex, setCategory, setSource, fetchNews, darkTheme, setDarkTheme }} >
        {children}
    </NewsContext.Provider>
}

export default Context