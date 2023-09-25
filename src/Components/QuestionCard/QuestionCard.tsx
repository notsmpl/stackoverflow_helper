import {FC} from 'react';
import styled from 'styled-components';
import { authorSearchFX, tagSearchFX } from '../../store/contentStore/dataStore';

interface IQuestion {
    value: {
        answer_count: number,
        link: string,
        title: string,
        tags:string[],
        accepted_answer_id?: number,
        owner:{
            account_id: number,
            user_id:number,
            display_name: string,
            profile_image: string,
        }
    }
}

const Card = styled.div`
    padding: 5px;
    height: 100px;
    margin: 1px;
    border: 1px solid grey;
    border-radius: 5px;
    align-items:center;

`

const Tag = styled.div`
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    cursor: pointer;
    transition: 250ms;

    &:hover{
        font-size: 18px;
    }
    
`

const QuestionCard: FC<IQuestion> = ({value}) => {
    
    const onTagClick = (e:React.MouseEvent<HTMLElement>) => {
        tagSearchFX(e.currentTarget.textContent)
    }

    const onAuthorClick = (id:number) => {
        authorSearchFX(id)
    }

    return(
        <Card>
            <p>Answers: {value.answer_count} </p>
            <h3>
                <a target='_blank'
                    className="text-cyan-500" 
                    href={value.link}>{value.title}
                </a>
            </h3>
            <div className="flex justify-between">
                <div className='flex row-auto'>
                    <div className='pr-1'>Tags: </div>
                    <p className= "flex">
                        {value.tags.map((value)=>{
                        return <Tag onClick={onTagClick}>{value}</Tag>
                    } )}
                    </p>
                </div>
                <div className='flex row-auto cursor-pointer' onClick={()=>onAuthorClick(value.owner.user_id)}>
                    <p className="pr-2">{value.owner.display_name}</p>
                    <img className="w-5 h-5" src={value.owner.profile_image} alt='user icon'></img>
                </div>
            </div>
        </Card>
    )
};

export default QuestionCard;