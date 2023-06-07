import React from 'react'

const Cricket = () => {

    const [score, setScore] = React.useState(0)
    const [balls, setBalls] = React.useState(0)
    const [bowler, setBowler] = React.useState(0)
    const [batsman, setBatsman] = React.useState([0, 1])
    const [wicket, setWicket] = React.useState(0)
    const [over, setOver] = React.useState(0)
    const [teamNameA, setTeamNameA] = React.useState('India')
    const [teamNameB, setTeamNameB] = React.useState('Australia')

    function calculation_over(balls) {
        let overs = Math.floor(balls / 6)
        let remainballs = balls % 6
        return overs + '.' + remainballs
    }

    const [teamA, setTeamA] = React.useState([{
        "id": 1,
        "name": "Virat Kohli",
        "category": "Batsman",
        "Runs": 0,
        "Balls": 0,
        "Four": 0,
        "Six": 0,
        "Timings": 0,
        "StrickRate": 0
    },
    {
        "id": 2,
        "name": "Rohit Sarma",
        "category": "Batsman",
        "Runs": 0,
        "Four": 0,
        "Six": 0,
        "Balls": 0,
        "Timings": 0,
        "StrickRate": 0
    },
    {
        "id": 3,
        "name": "MS Dhoni",
        "category": "Batsman",
        "Runs": 0,
        "Four": 0,
        "Six": 0,
        "Balls": 0,
        "Timings": 0,
        "StrickRate": 0
    }])

    const [teamB, setTeamB] = React.useState([{
        "id": 1,
        "name": "Josh Buttler",
        "category": "Batsman",
        "Runs": 0,
        "Balls": 0,
        "Wicket": 0,
        "Maddian": 0,
        "Eco": 0
    },
    {
        "id": 2,
        "name": "Stive Smith",
        "category": "Bowler",
        "Runs": 0,
        "Balls": 0,
        "Wicket": 0,
        "Maddian": 0,
        "Eco": 0
    },
    {
        "id": 3,
        "name": "Rasid Khan",
        "category": "Bowler",
        "Runs": 0,
        "Balls": 0,
        "Wicket": 0,
        "Maddian": 0,
        "Eco": 0
    }])


    const handleRuns = (e) => {

        // ---- Start Batsman ----- //
        //balls count
        setBalls(balls + 1)

        let temp = [...teamA];
        temp[batsman[0]].Balls += 1;
        setTeamA(temp)

        if (e % 2 == 0) {
            //console.log(e)
            let temp = [...teamA];
            temp[batsman[0]].Runs += e;
            setTeamA(temp)

            // four or six
            if (e == 4) {
                let temp = [...teamA];
                temp[batsman[0]].Four += 1;
                setTeamA(temp)
            }
            if (e == 6) {
                let temp = [...teamA];
                temp[batsman[0]].Six += 1;
                setTeamA(temp)
            }


        } else {
            //console.log(e)
            let temp = [...teamA];
            temp[batsman[0]].Runs += e;
            setTeamA(temp)

            //change the strick
            let temp1 = batsman[0]
            batsman[0] = batsman[1]
            batsman[1] = temp1
        }
        //score count
        setScore(score + e)

        if (balls % 6 == 0 && balls != 0) {
            //change the strick for batsman
            let temp1 = batsman[0]
            batsman[0] = batsman[1]
            batsman[1] = temp1


            var bowlerIndex = prompt('Please Bowler Index');
            setBowler(parseInt(bowlerIndex))
            console.log(bowlerIndex)
        }
        console.log(teamA)
        // ---- End Batsman ----- //

        // ---- Start Bowler ----- //
        //balls count
        let temp2 = [...teamB];
        temp2[bowler].Balls += 1;
        temp2[bowler].Runs += e;
        setTeamB(temp2)




    }

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3>Ind : <span>{score}/{wicket} ({calculation_over(balls)}/20)</span></h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 text-center border">
                        <div className='d-flex justify-content-between'>
                            <h3 className='text-success'>{teamA[batsman[0]].name} ({teamA[batsman[0]].Runs})</h3>
                            <h3 className='text-danger'>{teamA[batsman[1]].name} ({teamA[batsman[1]].Runs})</h3>
                        </div>
                    </div>
                    <div className="col-md-6 text-center border">
                        <h3>{teamB[bowler].name} ({teamB[bowler].Balls} | {teamB[bowler].Runs})</h3>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-12 border">
                        <h3>This Over : <span></span></h3>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-2 ">
                        <h5 className='mt-1'><input type="checkbox" name='wide'></input> Wide</h5>
                    </div>
                    <div className="col-md-2 ">
                        <h5 className='mt-1'><input type="checkbox" name='wide'></input> NoBall</h5>
                    </div>
                    <div className="col-md-2 ">
                        <h5 className='mt-1'><input type="checkbox" name='wide'></input> Bye</h5>
                    </div>
                    <div className="col-md-2 ">
                        <h5 className='mt-1'><input type="checkbox" name='wide'></input> LegBye</h5>
                    </div>
                    <div className="col-md-2 ">
                        <h5 className='mt-1'><input type="checkbox" name='wide'></input> Wicket</h5>
                    </div>
                    <div className="col-md-2">
                        <button type='button' className='btn btn-danger'>Undo</button>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-12 text-center">
                        {
                            [0, 1, 2, 3, 4, 5, 6].map((e, i) => {
                                return (<button type='button' className='btn btn-danger btn-lg rounded-circle ms-4' key={i} onClick={() => handleRuns(e)} >{e}</button>)
                            })
                        }

                    </div>
                </div>
            </div>

        </>
    )
}

export default Cricket