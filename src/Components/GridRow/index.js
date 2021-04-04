import React from "react";
import GridItem from '../GridItem';
import './GridRow.css';
import '../GridItem/GridItem.css';


class GridRow extends React.Component {
    render() {
        return (
            <div class="rows">
                {
                    this.props.row.map((col, colIndex) => (
                        <GridItem
                            col={col}
                            colIndex={colIndex}
                            rowIndex={this.props.rowIndex}
                            handlePlayerClick={this.props.handlePlayerClick}
                        />
                    ))
                }
            </div>
        );
    }
}

export default GridRow;

//App->row->item