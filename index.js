import React, { Component,Fragment } from 'react'
import Tab from './Tab'
import Content from './Content'
import './index.css'
export class Index extends Component {
    state = {
        idActive: 1,
    }
    render() {
        const { idActive } = this.state;
        const { content, tabs } = this.props;
        const handleChangeTab = (id) =>{
            this.setState({
                idActive: id
            })
        }
        return (
            <Fragment>
                {tabs.map((tab,index) =>
                    <Tab key={index} handleChangeTab={handleChangeTab} id={tab.id} active={idActive} tab={tab}/>
                )}
                {content.map((content,index) =>
                    <Content  key={index} id={content.id} active={idActive} content={content}/>
                )}
            </Fragment>
        )
    }
}
