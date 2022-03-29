// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Lottery {
    address public manager;
    address[] public players;
    uint public entryFee = 0.1 ether;

    address winner;

    uint public _end;

    uint public time = block.timestamp;

    // enums
    enum LotteryStatus {
        START, STARTED, ENDED
    }

    // events
    event WinnerDeclared(address winner, uint winningPrice);

    LotteryStatus public status = LotteryStatus.START;

    // modifiers
    modifier isManager {
        require(msg.sender == manager, "you are not the manager");
        _;
    }

    constructor() {
        manager = msg.sender;
    }

    // get all players
    function getPlayers() public view returns (address[] memory) {
        return players;
    }

    // start the lottery
    function start(uint _timeInMinutes) public isManager {
        require(status == LotteryStatus.START, "lottery has already been started or ended.");

        status = LotteryStatus.STARTED;

        // time for lottery
        _end = block.timestamp + (_timeInMinutes * 60);
    }

    // enter the lottery
    function enter() public payable {
        require(_end >= uint(block.timestamp), "time is up.");
        require(!isParticipate(msg.sender), "you are already a participant");
        require(msg.value >= entryFee, "entry fee is less then 0.1 ether");
        require(status == LotteryStatus.STARTED, "lottery has not started or its ended.");

        players.push(msg.sender);
    }

    function isParticipate(address _participant) private view returns(bool) {
        for(uint i=0; i<players.length; i++) {
            if(players[i] == _participant) {
                return true;
            }
        }
        return false;
    }

    // get random
    function random() private view returns (uint) {
        return uint(keccak256(abi.encodePacked(block.difficulty, block.timestamp, players)));
    }

    function end() public  {
        require(block.timestamp >= _end, "you can not end lottery before time.");
        status = LotteryStatus.ENDED;

        require(players.length > 0, "0 participants");
        uint winnerIndex = random() % players.length;
        winner = players[winnerIndex];
        uint priceMoney = winningPrice();

        // transfer everything to winner;
        payable(winner).transfer(address(this).balance);

        // reset players.
        players = new address[](0);


        // winner declared event;
        emit WinnerDeclared(winner, priceMoney);
    }

    function getRemainingTime() public returns(uint) {
        if(_end <= uint(block.timestamp)){
            end();
            return 0;
        } else{

        // require(_end >= block.timestamp, "time is already up");
        require(!(status == LotteryStatus.ENDED), "lottery is not started or its ended.");
        
        return _end - block.timestamp;
        }
    }

    function getWinner() public view returns (address) {
        return winner;
    }

    // get winning price
    function winningPrice() public view returns(uint) {
        return address(this).balance;
    }
}