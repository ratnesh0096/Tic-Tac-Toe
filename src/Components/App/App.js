import React from "react";
import './App.css';
import GridRow from '../GridRow';
import Header from "../Header";
import Footer from "../Footer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gameState: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
      ],
      currentTurn: 'X',
      gameOverFlag: true,
      gameDrawCount: 0
    }

  }
  reset = () => {
    const resetBoard = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ];
    this.setState({
      gameState: resetBoard,
      currentTurn: 'X',
      gameOverFlag: true,
      gameDrawCount: 0
    })
  }

  handlePlayerClick = (rowIndex, colIndex) => {
    if (this.state.gameOverFlag) {
      const copiedGameState = [...this.state.gameState];
      const WINING_COMBINATIONS = [
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],
        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [2, 0]]
      ];

      if (copiedGameState[rowIndex][colIndex] === "") {
        copiedGameState[rowIndex][colIndex] = this.state.currentTurn;
        this.setState({
          gameState: copiedGameState,
          currentTurn: this.state.currentTurn === "X" ? "O" : "X",
        })


        if (checkWin(copiedGameState)) {
          this.setState({
            gameOverFlag: false,
          })
          alert(this.state.currentTurn + " Won");
          // this.render();
          return;
        }
        else {
          this.setState({
            gameDrawCount: this.state.gameDrawCount + 1,
          })
          if (this.state.gameDrawCount === 8) {
            alert("Game Draw");
            // this.render();
            return;
          }
        }
      }

      function checkWin(copiedGameState) {
        for (let i = 0; i < 8; i++) {
          const [a, b, c] = WINING_COMBINATIONS[i];
          if (copiedGameState[a[0]][a[1]] && copiedGameState[a[0]][a[1]] === copiedGameState[b[0]][b[1]] && copiedGameState[a[0]][a[1]] === copiedGameState[c[0]][c[1]]) {
            return true;
          }
        }
      }
    }

  }

  render() {
    return (
      <div class="container">
        <Header />
        {
          this.state.gameState.map((row, rowIndex) => (
            <GridRow
              row={row}
              rowIndex={rowIndex}
              handlePlayerClick={this.handlePlayerClick}
            />
          ))
        }
        <Footer turn={this.state.currentTurn} />
        <br />
        <button onClick={this.reset}>RESET</button>
      </div>
    );
  }
}
export default App;
