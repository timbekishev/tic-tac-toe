class TicTacToe {
    constructor() {
        this.player0 = 0;
        this.player1 = 1;
        this.draw = false;
        this.a = [
            [null, null, null], 
            [null, null, null], 
            [null, null, null]
        ];
    }

	getCurrentPlayerSymbol() { // (должно вернуть либо х либо 0)
		if (this.player1 == 1) 
            return 'x'; 
        else 
            return 'o';
	}

	nextTurn(rowIndex, columnIndex) { 
	    if (this.getFieldValue(rowIndex, columnIndex) == null) { 
		    this.a[rowIndex][columnIndex] = this.getCurrentPlayerSymbol(); 
            if (this.player0 == 0) { 
                this.player1 = 0; 
                this.player0 = 1; 
            } 
            else { 
                this.player1 = 1; 
                this.player0 = 0; 
            } 
            for (var i = 0; i <= 2; i++) { 
                for (var j = 0; j <= 2; j++) 
                    if (this.a[i][j] == null) { 
                        this.draw = false; 
                        break; 
                    } else 
                        this.draw = true;
                if (this.draw == false) 
                    break; 
            } 
		} 
	}

	getWinner() { 
        if (this.a[0][0] != null && this.a[0][0] == this.a[0][1] && this.a[0][1] == this.a[0][2]) return this.a[0][2]; 
        if (this.a[1][0] != null && this.a[1][0] == this.a[1][1] && this.a[1][1] == this.a[1][2]) return this.a[1][2]; 
        if (this.a[2][0] != null && this.a[2][0] == this.a[2][1] && this.a[2][1] == this.a[2][2]) return this.a[2][2]; 
        if (this.a[0][0] != null && this.a[0][0] == this.a[1][0] && this.a[1][0] == this.a[2][0]) return this.a[2][0]; 
        if (this.a[0][1] != null && this.a[0][1] == this.a[1][1] && this.a[1][1] == this.a[2][1]) return this.a[2][1]; 
        if (this.a[0][2] != null && this.a[0][2] == this.a[1][2] && this.a[1][2] == this.a[2][2]) return this.a[2][2]; 
        if (this.a[0][0] != null && this.a[0][0] == this.a[1][1] && this.a[1][1] == this.a[2][2]) return this.a[2][2]; 
        if (this.a[0][2] != null && this.a[0][2] == this.a[1][1] && this.a[1][1] == this.a[2][0]) return this.a[2][0]; 
        return null; 
    }

    isFinished() {
        if (this.draw == true || this.getWinner() != null)
            return true;
        else 
            return false;
    }

    noMoreTurns() {
	    return this.draw;
    }

    isDraw() {
	    if (this.draw == true && this.getWinner() == null)
            return true;
        else
            return false;
    }

    getFieldValue(rowIndex, colIndex) {
	    return this.a[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
