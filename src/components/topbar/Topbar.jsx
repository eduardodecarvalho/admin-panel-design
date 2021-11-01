import React from 'react'
import "./topbar.css"
import { NotificationsNone, Language, Settings } from '@material-ui/icons'


export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topleft">
                    <span className="logo">
                        Admin
                    </span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContair">
                        <NotificationsNone />
                        <span className="topiconBadge">?</span>
                    </div>
                    <div className="topbarIconContair">
                        <Language />
                        <span className="topiconBadge">?</span>
                    </div>
                    <div className="topbarIconContair">
                        <Settings />
                    </div>
                        <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}