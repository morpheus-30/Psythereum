// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Recordings {

    uint[] arr;

    struct user {
        string proof1;
        string proof2;
        string email;
        bool isVerified;
    }

    struct recording {
        uint id;
        string title;
        uint key;
    }

    struct sessionHistory {
        uint id;
        address patient;
        address doctor;
        uint sessionCount;
    }

    mapping (uint => recording) private recordingsMap;
    mapping (address => user) private usersMap;

    event recordingCreated(uint uid);
    event userCreated(address id);

    function createRecording(uint uid, uint id, uint key, string memory title) public {
        recordingsMap[uid].id= id;
        recordingsMap[uid].title= title;
        recordingsMap[uid].key= key;
        arr.push(uid);
        emit recordingCreated(uid);
    }

    function createUser(string memory email, string memory proof1, string memory proof2 ) public {
        usersMap[msg.sender].proof1= proof1;
        usersMap[msg.sender].proof2= proof2;
        usersMap[msg.sender].email= email;
        usersMap[msg.sender].isVerified= true;
        emit userCreated(msg.sender);
    }

    function verifyUser(address uid) public {
        usersMap[uid].isVerified= true;
    }

    function getRecordings() view public returns (uint[] memory) {
        return arr;
    }

}