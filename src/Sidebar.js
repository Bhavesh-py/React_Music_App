import React from 'react'
import "./Sidebar.css"
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic"
import { UseDataLayerValue } from './DataLayer';
function Sidebar() {

const[{playlists}, dispatch] = UseDataLayerValue();

    return (
        <div className="sidebar">

            <img className="sidebar_logo"
            src="images/logo1.png" alt='logo'/>
 

            <SidebarOption title="Home" Icon={HomeIcon}/>
            <SidebarOption title="Search" Icon={SearchIcon} />
            <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />

            <br />
            <strong className="sidebar_title">PLAYLISTS</strong>
            <hr />

            {playlists?.items?.map(playlist => (
                <SidebarOption title={playlist.name}/>
            ))}
        </div>

    )
}

export default Sidebar
