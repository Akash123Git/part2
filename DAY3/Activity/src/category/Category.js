import React from 'react';

export default class Category extends React.Component {
    render(){
        return <div style={{margin:20,position:"fixed",top:200}}>
            <button onClick={this.props.categorywatches}>watches</button><br/><br/><br/>
            <button onClick={this.props.categoryshoes}>shoes</button>
        </div>
    }
}