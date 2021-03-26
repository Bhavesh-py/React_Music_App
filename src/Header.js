import React from 'react'
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import {Avatar} from "@material-ui/core"
import { UseDataLayerValue } from './DataLayer';

function Header() {

    const [{user}, dispatch] = UseDataLayerValue();

    return  (
        <div className="header">
                <div className="header_left">
                    <SearchIcon />
                    <input placeholder="Search for Songs, Albums or Artists."
                    type="text" />
                </div>

                <div className="header_right">
                    <Avatar src={user?.images[0]?.url}  alt="UserImg"/>
                    <h4>{user?.display_name}</h4>
                </div>
        </div>
        )
}

export default Header