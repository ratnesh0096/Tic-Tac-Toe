import React from "react";
import './GridItem.css';

class GridItem extends React.Component {
    render() {
        // console.log(this.props.rowIndex+" "+this.props.colIndex);
        return (
            <div class="items"
                onClick={()=>{this.props.handlePlayerClick(this.props.rowIndex, this.props.colIndex)}}>
                {this.props.col}
            </div>
        );
    }
}

export default GridItem;