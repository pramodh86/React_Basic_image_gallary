import imgOne from '../images/img1.jpg'
import imgTwo from '../images/img2.jpg'
import imgThree from '../images/img3.jpg'
import imgFour from '../images/img4.jpg'
import imgFive from '../images/img5.jpg'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { IconButton,Typography } from '@mui/material';
import {  useState } from 'react'


function DashBoard() {

        let imageURL = ""
        let [image,setImage] = useState(2)
        
        

        


            if(image === 2 )
        {imageURL = imgOne}else if(image === 3) {imageURL = imgTwo} else if(image === 4)
        {imageURL = imgThree}else if(image === 5){imageURL = imgFour}else if(image === 6)
        {imageURL = imgFive}



        

        
        
      

       
      
        





  return (
    <>
    <div className='bg-[#f44336] w-[640px] h-[600px] pt-[20px] pl-[20px] pr-[20px]'>
        <div className='bg-white w-[600px] h-[450px] z-10 relative '>
          <img src={imageURL} alt='Image One' className=' w-[600px] h-[450px]  z-20'></img>
          <div className='w-[40px] h-[40px]  z-30 absolute top-[225px] left-3'>
            <IconButton color='secondary' onClick={()=>setImage(image ===2 ? image=2 : image-1)}  >
              <ArrowCircleLeftIcon fontSize='large' sx={{ height: 40, width: 40 }} ></ArrowCircleLeftIcon>
            </IconButton>
          </div>
          <div className='w-[40px] h-[40px]  z-30 absolute top-[225px] right-3'>
            <IconButton color='secondary' onClick={()=>setImage(image ===6 ? image=6 : image+1)}>
              <ArrowCircleRightIcon fontSize='large' sx={{ height: 40, width: 40 }} ></ArrowCircleRightIcon>
            </IconButton>
          </div>
        </div>
        <div className='flex justify-center items-center mt-4   '>
        <Typography variant="h4" sx={{color:'white'}}>Visit Sri Lanka</Typography>
        </div>
      </div>
    
    </>
  )
}

export default DashBoard