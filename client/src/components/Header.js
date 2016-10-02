import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import ExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more'

export default class Header extends Component {

    render() {
        const menuElem = (
            <IconMenu
                iconButtonElement={<IconButton color="#ffffff"><ExpandMoreIcon/></IconButton>}
                anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                targetOrigin={{horizontal: 'left', vertical: 'top'}}
            >
                <MenuItem primaryText="Buy" />
                <MenuItem primaryText="Sell" />
            </IconMenu>
        )
        return (
            <div>
                <AppBar iconElementLeft={menuElem}/>
            </div>
        )
    }
}