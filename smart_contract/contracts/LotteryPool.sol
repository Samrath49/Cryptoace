// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Lottery.sol";

contract LotteryPool {

    struct lotteryStruct {
        Lottery lotteryContract;
        address manager;
        uint256 endedTimeStamp;
    }

    // map lottery address to lottery info
    mapping(address => lotteryStruct) public lotteriesMapping;

    event LotteryCreated(address lotteryAddress);

    address[] public lotteriesContractsAddresses;

    address public manager;

    constructor() {
        manager = msg.sender;
    }

    modifier isOwner {
        require(manager == msg.sender, "action requires Owner/manager");
        _;
    }

    function createLottery(uint256 _timeInMinutes) public {
        // create lottery instance
        Lottery localLottery = new Lottery();

        // start the lottery
        localLottery.start(_timeInMinutes);

        // save the lottery in lotteries
        lotteriesMapping[address(localLottery)] = lotteryStruct(localLottery, msg.sender, block.timestamp+(_timeInMinutes*60));

        emit LotteryCreated(address(localLottery));

        // save lottery address
        lotteriesContractsAddresses.push(address(localLottery));
    } 

    // will return specific lottery contract
    function getLotteryContract(address _lotteryAddress) public view returns (lotteryStruct memory) {
        return lotteriesMapping[_lotteryAddress];
    }

}