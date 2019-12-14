import React, { Component } from 'react'
import Board from '@lourenci/react-kanban'
const board = {
    lanes: [
        {
            id: 1,
            title: 'Backlog',
            cards: [
                {
                    id: 1,
                    title: 'Add card',
                    description: 'Add capability to add a card in a lane'
                },
                {
                    id: 2,
                    title: 'Add card 2',
                    description: 'rthyrtht'
                },
                {
                    id: 3,
                    title: 'Add card 3',
                    description: 'dwadaw'
                },
            ]
           
        },
        {
            id: 2,
            title: 'Doing',
            cards: [
                {
                    id: 2,
                    title: 'Drag-n-drop support',
                    description: 'Move a card between the lanes'
                },
            ]
        }
    ]
};
class ToDoForm extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
          fullName: ""
        };
      }
     
      handleSubmitForm(event) {
        alert("Full Name: " + this.state.fullName);
        debugger;
        if(board.lanes['title']='Backlog'){
debugger;
        }
        event.preventDefault();
      }
     
      handleChange(event) {
        var value = event.target.value;
     
        this.setState({
          fullName: value
        });
      }
    render() {
        return (
            <form onSubmit={event => this.handleSubmitForm(event)}>
            <label>
              Full Name:
              <input
                type="text"
                value={this.state.fullName}
                onChange={event => this.handleChange(event)}
              />
            </label>
            <input type="submit" value="Submit" />
            <p>{this.state.fullName}</p>        
            <Board
                allowRemoveLane
                allowRenameLane
                allowRemoveCard
                onLaneRemove={console.log}
                onCardRemove={console.log}
                onLaneRename={console.log}
                initialBoard={board}
            />
          </form>
        );
    }
}
export default ToDoForm