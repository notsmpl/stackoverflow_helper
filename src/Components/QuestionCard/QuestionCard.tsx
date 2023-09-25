import {FC} from 'react';
import styled from 'styled-components';

interface IQuestion {
    value: {
        answer_count: number;
        title: string;
        tags:string[];
        owner:{
            display_name: string;
            profile_image: string;
        }
    }
}

const Card = styled.div`
    height: 100px;
    margin: 1px;
    border: 1px solid grey;
    align-items:center;

`

const QuestionCard: FC<IQuestion> = ({value}) => {
    
    const photoURL = value.owner.profile_image
    
    return(
        <Card>
            <p>Answers: {value.answer_count} </p>
            <h3>Title: {value.title}</h3>
            <div className="flex justify-between">
                <div className='flex row-auto'>
                    <div className='pr-1'>Tags: </div>
                    <p className= "flex">{value.tags.map((value)=>{
                        return <div className='pr-1 pl-1'>{value}</div>
                    } )}</p>
                </div>
                
                <div className='flex row-auto'>
                    <p className="pr-2">{value.owner.display_name}</p>
                    <img className="w-5 h-5" src={photoURL}></img>
                </div>
                
            </div>
        </Card>
    )
};

export default QuestionCard;