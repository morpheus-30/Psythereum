// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Recordings {

    string[] arr;

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

    mapping (string => recording) private recordingsMap;
    mapping (address => user) private usersMap;

    event recordingCreated(string uid);
    event userCreated(address id);

    function createRecording(string memory cid, uint id, uint key, string memory title) public {
        recordingsMap[cid].id= id;
        recordingsMap[cid].title= title;
        recordingsMap[cid].key= key;
        arr.push(cid);
        emit recordingCreated(cid);
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

    function getRecordings() view public returns (string[] memory) {
        return arr;
    }

    function getRecordingData(string memory cid) view public returns (uint, string memory) {
        return (recordingsMap[cid].key, recordingsMap[cid].title);
    }

}