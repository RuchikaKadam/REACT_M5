import React from 'react'
import './QuoteScreen.css'
import Navbar from '../component/Navbar'
import { QuoteCard } from '../component/QuoteCard'

export const QuoteScreen = () => {
    const quoteData = [
        {
            "desc": "",
            "author" : ""
        },
        {
            "desc": "",
            "author" : ""
        },
        {
            "desc": "",
            "author" : ""
        },
        {
            "desc": "",
            "author" : ""
        },
        {
            "desc": "",
            "author" : ""
        },
        {
            "desc": "",
            "author" : ""
        }
]
    return(
        <>
            {/* Navbar */}
            <Navbar/>
            <section className='quote-section'>
                {
                    quoteData.map((ele, index) => {
                        return (
                            <QuoteCard
                            description={ele.desc}
                            author={ele.author}
                            key ={index}
                            />
                        )
                    })
                }
            </section>
        </>
    )
}