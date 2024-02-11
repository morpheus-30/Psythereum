import React from "react";
import { useState } from "react";
import {
    ref,
    uploadBytesResumable,
    getDownloadURL,
    getStorage
} from "firebase/storage";
import axios from "axios";
import { auth } from "../firebase";
const PsyVerify = () => {

    let myuser = auth.currentUser;

    

    const storage = getStorage();
    const [file, setFile] = useState(null);
    const [file2, setFile2] = useState(null);
    const [percent, setPercent] = useState(0);
    const [percent2, setPercent2] = useState(0);
    const [url, setUrl] = useState("");
    const [url2, setUrl2] = useState("");

    function handleUpload() {
        if (!file && !file2) {
            alert("Please choose a file first!")
            return;
        }

        const allowedFileTypes = ["pdf", "jpg", "jpeg", "png"];
        const fileType = file && file.type.split("/")[1];
        const fileType2 = file2 && file2.type.split("/")[1];

        if (!allowedFileTypes.includes(fileType) || !allowedFileTypes.includes(fileType2)) {
            alert("Please choose a file of type PDF, JPG, JPEG, or PNG only!");
            return;
        }
        const storageRef = ref(storage, `/files/${file.name}`)
        const storageRef2 = ref(storage, `/files/${file2.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file);
        const uploadTask2 = uploadBytesResumable(storageRef2, file2);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );

                // update progress
                setPercent(percent);
            },
            (err) => console.log(err),
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    console.log(url);

                });
            }
        );
        uploadTask2.on(
            "state_changed",
            (snapshot) => {
                const percent2 = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );

                // update progress
                setPercent2(percent2);
            },
            (err) => console.log(err),
            () => {
                // download url
                getDownloadURL(uploadTask2.snapshot.ref).then((url) => {
                    console.log(url);
                    setUrl2(url);

                });
            }
        );
        if (myuser != null && myuser != "No user") {

            axios({
                method: "post",
                url: "",
                data: {
                    "license": url,
                    "degree": url2,
                    "email": myuser,
                }

            })
        }else{
            alert("Please log in first")
        }

    }
    return (
        <div>
            <div className="my-10 w-full flex justify-start items-center">
                <span className="text-2xl mx-10 font-semibold">PSYTHEREUM</span>
            </div>
            <div className="my-20 w-full flex flex-col justify-center items-center">
                <h2 className="font-bold text-4xl m-4">PSYCHIATRIST VERIFICATION</h2>
                <div className="flex flex-col border-black border-2 rounded-xl bg-my-gray p-10">
                    <div >Kindly upload your License in the below section</div>
                    <input type="file" className="m-2 h-10 rounded-md p-4 text-xl" onChange={() => {
                        setFile(event.target.files[0]);
                    }} />
                    <div className="h-10"> </div>
                    <div >Kindly upload your Graduate Degree in the below section</div>
                    <input type="file" className="m-2 h-10 rounded-md p-4 text-xl" onChange={() => {
                        setFile2(event.target.files[0]);
                    }} />
                    <button className="nav-button   " onClick={() => {
                        handleUpload();
                        console.log(myuser);
                    }
                    } >Submit</button>
                    <div className="h-3"> </div>
                    <div>{(percent + percent2) / 2}%</div>



                </div>
            </div>

        </div>
    );
};

export default PsyVerify;