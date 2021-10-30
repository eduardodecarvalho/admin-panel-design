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
                        <img src="https://www.shareicon.net/data/128x128/2016/06/19/603742_linux_512x512.png" alt="../../images/avatar.png" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}