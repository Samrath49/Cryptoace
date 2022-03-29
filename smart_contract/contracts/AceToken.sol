// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AceToken {
    uint256 public totalSupply;
    string public name = "AceToken";
    string public symbol = "ACE";
    string public standard = "Ace Token v1.0";
    uint256 public decimals = 18;

    // events
    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    event Approval(
        address indexed _owner,
        address indexed _spender,
        uint256 _value
    );

    // mappings
    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    constructor(uint256 _initialSupply) {
        // set total supply
        totalSupply = _initialSupply;
        // owner will have all supply at first
        balanceOf[address(this)] = _initialSupply;
    }

    function transfer(address _to, uint256 _value)
        public
        returns (bool success)
    {
        require(
            balanceOf[address(this)] >= _value,
            "You do not have sufficient funds"
        );
        balanceOf[address(this)] -= _value;
        balanceOf[_to] += _value;
        emit Transfer(address(this), _to, _value);
        return true;
    }

    function approve(address _spender, uint256 _value)
        public
        returns (bool success)
    {
        // allow account to how much value is approved
        allowance[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }

    function transferFrom(
        address _from,
        address _to,
        uint256 _value
    ) public returns (bool success) {
        require(_value <= balanceOf[_from], "Value is less in @token");
        require(
            _value <= allowance[_from][msg.sender],
            "Allowance value is less in @token"
        );

        balanceOf[_from] -= _value;
        balanceOf[_to] += _value;

        allowance[_from][msg.sender] -= _value;

        emit Transfer(_from, _to, _value);
        return true;
    }
}
