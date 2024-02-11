const WaitWhileWeFinish = () => {
    return (
        <div>
            <div className="text-4xl font-bold  pl-[3%] mt-[3%]">PSYTHEREUM</div>
            <div
                className='text-8xl pt-10 pl-10 font-bold'
            >Please wait while we <br />process your session, <br />Do not refresh or exit. </div>
            <img src="loading.gif" width={100} alt="loading" className="mx-[40%] mt-[4%]"/>

        </div>
    );
}
export default WaitWhileWeFinish;