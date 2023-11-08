import { ReactNode } from 'react'

interface Props {


    children: ReactNode;
  

}

export const SecondaryHeader = (props: Props) => {



  return (
    <h1 className='SecondayHeader text-white'>
        {props.children}
    </h1>
  )
}


export const transformUppercase = (str : string) => {

    let result = str[0].toUpperCase()
    for(let i = 1 ; i < str.length ; ++i){
        
        if(str[i -1 ] === " "){

            result = result + str[i].toUpperCase()
        }
        else{

            result += str[i]
        }
                    
    }

    
    console.log(result);
    
   
    
}