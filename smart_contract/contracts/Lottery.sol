// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Lottery {
    address public manager;
    address[] public players;
    uint256 public entryFee = 0.1 ether;

    address winner;

    uint256 public _end;

    uint256 public time = block.timestamp;

    // enums
    enum LotteryStatus {
        START,
        STARTED,
        ENDED
    }

    // events
    event WinnerDeclared(address winner, uint256 winningPrice);

    LotteryStatus public status = LotteryStatus.START;

    constructor(address _manager) {
        manager = _manager;
    }

    // get all players
    function getPlayers() public view returns (address[] memory) {
        return players;
    }

    // start the lottery
    function start(uint256 _timeInMinutes) public {
        require(
            status == LotteryStatus.START,
            "lottery has already been started or ended."
        );

        status = LotteryStatus.STARTED;

        // time for lottery
        _end = block.timestamp + (_timeInMinutes * 60);
    }

    // enter the lottery
    function enter() public payable {
        require(_end >= uint256(block.timestamp), "time is up.");
        require(!isParticipate(msg.sender), "you are already a participant");
        require(msg.value >= entryFee, "entry fee is less then 0.1 ether");
        require(
            status == LotteryStatus.STARTED,
            "lottery has not started or its ended."
        );

        players.push(msg.sender);
    }

    function isParticipate(address _participant) private view returns (bool) {
        for (uint256 i = 0; i < players.length; i++) {
            if (players[i] == _participant) {
                return true;
            }
        }
        return false;
    }

    // get random
    function random() private view returns (uint256) {
        return
            uint256(
                keccak256(
                    abi.encodePacked(block.difficulty, block.timestamp, players)
                )
            );
    }

    function end() public {
        require(
            block.timestamp >= _end,
            "you can not end lottery before time."
        );
        status = LotteryStatus.ENDED;

        require(players.length > 0, "0 participants");
        uint256 winnerIndex = random() % players.length;
        winner = players[winnerIndex];
        uint256 priceMoney = winningPrice();

        // transfer everything to winner;
        payable(winner).transfer(address(this).balance);

        // reset players.
        players = new address[](0);

        // winner declared event;
        emit WinnerDeclared(winner, priceMoney);
    }

    function getRemainingTime() public returns (uint256) {
        if (_end <= uint256(block.timestamp)) {
            end();
            return 0;
        } else {
            // require(_end >= block.timestamp, "time is already up");
            require(
                !(status == LotteryStatus.ENDED),
                "lottery is not started or its ended."
            );

            return _end - block.timestamp;
        }
    }

    function getWinner() public view returns (address) {
        return winner;
    }

    // get winning price
    function winningPrice() public view returns (uint256) {
        return address(this).balance;
    }
}
