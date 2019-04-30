import React, { Component } from 'react';

class Tab extends Component {
    render() {
        const { active, id, handleChangeTab,tab } = this.props
        return (
            <button style={{order: tab.id}} onClick={() => handleChangeTab(id)} className={active === id ? "active" : ""}>{tab.name}</button>
        )
    }
}

export default Tab;