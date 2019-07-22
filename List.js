import React from 'react'

function List(props) {
    return(
        <div>
            <li> {props.count.one} notes of Rs 1 </li>
            <li> {props.count.two} notes of Rs 2 </li>
            <li> {props.count.five} notes of Rs 5 </li>
            <li> {props.count.ten} notes of Rs 10 </li>
            <li> {props.count.twenty} notes of Rs 20 </li>
            <li> {props.count.fifty} notes of Rs 50 </li>
            <li> {props.count.hundred} notes of Rs 100 </li>
            <li> {props.count.twohundred} notes of Rs 200 </li>
            <li> {props.count.fivehundred} notes of Rs 500 </li>
            <li> {props.count.twothousand} notes of Rs 2000 </li>
        </div>
    )
}

export default List;