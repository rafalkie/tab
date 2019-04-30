import React,{Component} from 'react'

class Content extends Component{
    render(){
        const {active,id,content} = this.props
        return(
            <div style={{order: content.id}}  className={active === id ? "activeContent" : "disabled"}>
                {content.name}
            </div>
        )
    }
}
export default Content;