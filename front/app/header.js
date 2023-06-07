// use client
import React from 'react';
import Link from "next/link"
import "./header.scss"


export default function MainHeader () {
    return (
        <header>
            <div className="inner clearfix">
                <div className="logoBox floatLeft">
                    <Link className="headerLogo" href="/">Logo</Link>
                </div> 
                <div className="telInfo floatRight">
                    <div>대표상담번호 044-715-7442</div>
                </div>
            </div>
        </header>
    )
}